import { logger } from '@logger';
import { MODULE } from '@modules';
import { EVENTS } from '../../../../reactive/reactive.config';
import { SocketIO } from '../../../../reactive/socket_io/socket';
import { inject, injectable } from 'inversify';
import { Socket } from 'socket.io';

@injectable()
export class ReactiveErrorLoggerMiddleware {
  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
  ) {
    this.setup();
  }

  async setup() {
    this.socket.io.on(EVENTS.CONNECTION, (socket) =>
      this.subscribeErrorLogs(socket),
    );
  }
  subscribeErrorLogs(socket: Socket) {
    socket.onAnyOutgoing((event: string, error: Error) => {
      if (event == EVENTS.ERROR.APP)
        logger.error(
          { context: 'WEBSOCKET', message: error.message, error },
          { id: socket.id },
        );
    });
  }
}
