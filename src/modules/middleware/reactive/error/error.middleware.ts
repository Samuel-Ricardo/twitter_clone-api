import { MODULE } from '@modules';
import { SocketIO } from '@modules/reactive/socket_io/socket';
import { inject, injectable } from 'inversify';

@injectable()
export class ReactiveErrorMiddleware {
  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
  ) {
    this.setup();
  }
  setup() {
    throw new Error('Method not implemented.');
  }
}
