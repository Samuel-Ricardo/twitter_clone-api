import { IErrorDTO } from '@Type';
import { MODULE } from '@modules/app.registry';
import { AppError } from '@modules/error';
import { IAppEvents, IErrorEvent, IErrorEventDTO } from '@modules/event/app';
import { EVENTS } from '@modules/reactive/reactive.config';
import { errorToStruct } from '@modules/util/error';
import { inject, injectable } from 'inversify';

export const PUBLISH_ERROR: IErrorEvent = async ({
  error,
  socket,
}: IErrorEventDTO) => {
  if (error instanceof AppError)
    socket.emit(EVENTS.ERROR.APP, error.toStruct());

  const response: IErrorDTO = {
    name: error.name,
    status: 500,
    message: error.message,
    cause: error.cause,
    error: true,
  };

  socket.emit(EVENTS.ERROR.APP, response);
};

@injectable()
export class ReactiveErrorMiddleware {
  constructor(
    @inject(MODULE.EVENTS.NODE.APP)
    private readonly events: IAppEvents,
  ) {
    this.setup();
  }

  async setup() {
    this.events.subscribeErrorEvents(this.errorHandler);
  }

  async errorHandler({ error, socket }: IErrorEventDTO) {
    if (error instanceof AppError)
      socket.emit(EVENTS.ERROR.APP, error.toStruct());

    socket.emit(EVENTS.ERROR.APP, errorToStruct(error));
  }
}
