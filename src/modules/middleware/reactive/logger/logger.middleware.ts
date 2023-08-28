import { MODULE, logger } from '@modules';
import { SocketIO } from '../../../reactive/socket_io/socket';
import { inject, injectable } from 'inversify';
import { EVENTS } from '../../../reactive/reactive.config';
import { Socket } from 'socket.io';

@injectable()
export class ReactiveLoggerMiddleware {
  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
  ) {
    this.setup();
  }

  async setup() {
    this.socket.io.on(EVENTS.CONNECTION, (socket) =>
      this.subscribeLogs(socket),
    );
  }

  async subscribeLogs(socket: Socket) {
    socket.onAny((event, ...args) => {
      logger.info(
        { context: 'WEBSOCKET', message: 'Event received' },
        { event, args },
      );
    });

    socket.onAnyOutgoing((event, ...args) => {
      logger.info(
        { context: 'WEBSOCKET', message: 'Event sent' },
        { event, args },
      );
    });
  }
}
