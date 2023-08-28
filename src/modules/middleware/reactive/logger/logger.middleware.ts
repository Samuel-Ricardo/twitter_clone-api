import { MODULE } from '@modules';
import { SocketIO } from '../../../reactive/socket_io/socket';
import { inject, injectable } from 'inversify';
import { EVENTS } from '../../../reactive/reactive.config';

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
}
