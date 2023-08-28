import { MODULE } from '@modules/app.registry';
import { AppError } from '@modules/error';
import { IAppEvents, IErrorEvent, IErrorEventDTO } from '@modules/event/app';
import { EVENTS } from '@modules/reactive/reactive.config';
import { SocketIO } from '@modules/reactive/socket_io/socket';
import { inject, injectable } from 'inversify';

export const PUBLISH_ERROR: IErrorEvent = ({
  error,
  socket,
}: IErrorEventDTO) => {
  if (error instanceof AppError)
    socket.emit(EVENTS.ERROR.APP, error.toStruct());

  socket.emit(EVENTS.ERROR.APP, {
    name: error.name,
    status: 500,
    message: error.message,
    cause: error.cause,
    error: true,
  });
};

@injectable()
export class ReactiveErrorMiddleware {
  constructor(
    @inject(MODULE.REACTIVE.SOCKET.IO)
    private readonly socket: SocketIO,
    @inject(MODULE.EVENTS.NODE.EMITTER)
    private readonly events: IAppEvents,
  ) {
    this.setup();
  }
}
