import { logger } from '@logger';
import { Server, Socket } from 'socket.io';
import { EVENTS } from '../reactive.config';
import { ISocketIOConfig } from '@Type/socket/config';
import { ENV } from '@env';

const globalForSocket = globalThis as unknown as {
  io: Server | undefined;
};

export const setup = (config?: ISocketIOConfig) => {
  if (!config) return globalForSocket.io;

  const { events, server } = config;

  const io = globalForSocket.io ?? new Server(server);

  const { HEALTH_CHECK, HANDSHAKE, CONNECTION, DISCONNECT, START } = EVENTS;

  logger.info({ context: 'WEBSOCKET', message: 'Socket.IO: setup starts' });

  io.on(CONNECTION, (socket: Socket) => {
    logger.info({
      context: 'WEBSOCKET',
      message: 'Socket.IO: starts a connection' + socket.id,
    });

    socket.on(HEALTH_CHECK, (data) =>
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: health check success' },
        { id: socket.id },
        { data },
      ),
    );

    socket.on(HANDSHAKE, (data) =>
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: handshake success' },
        { id: socket.id },
        { data },
      ),
    );

    if (events) events.forEach((event, key) => socket.on(key, event(socket)));

    socket.on(DISCONNECT, () => {
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: ends a connection' },
        { id: socket.id },
      );
    });

    // io.emit(HEALTH_CHECK, {setup: true}); // emit global event

    socket.emit(START.CONNECTION, { connected: true });

    logger.info({
      context: 'WEBSOCKET',
      message: 'Socket.IO: ends event => [connection]',
    });
  });

  logger.info({ context: 'WEBSOCKET', message: 'Socket.IO: setup ends' });

  return io;
};
