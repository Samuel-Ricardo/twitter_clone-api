import { logger } from '@logger';
import { Server, Socket } from 'socket.io';
import { EVENTS } from '../events.config';
import { ISocketIOConfig } from '@Type/socket/config';

export const setup = ({ http, events, global }: ISocketIOConfig) => {
  const io = new Server(http);
  const { HEALTH_CHECK, HANDSHAKE, CONNECTION, DISCONNECT } = EVENTS;

  io.on(CONNECTION, (socket: Socket) => {
    logger.info(
      { context: 'WEBSOCKET', message: 'Socket.IO: starts a connection' },
      socket,
    );

    socket.on(HEALTH_CHECK, () =>
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: health check success' },
        socket,
      ),
    );
    socket.on(HANDSHAKE, () =>
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: handshake success' },
        socket,
      ),
    );

    if (events) events.forEach((event, key) => socket.on(key, event(socket)));

    socket.on(DISCONNECT, () => {
      logger.info(
        { context: 'WEBSOCKET', message: 'Socket.IO: ends a connection' },
        socket,
      );
    });

    socket.broadcast.emit(HEALTH_CHECK, {
      message: 'Socket.IO starts a connection',
      data: socket,
    }); // emit global event
  });

  return io;
};
