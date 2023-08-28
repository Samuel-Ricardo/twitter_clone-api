import { AppError } from '@modules/error';
import { EVENTS } from '@modules/reactive/reactive.config';
import { Socket } from 'socket.io';

export const PUBLISH_ERROR = (error: Error | AppError, socket: Socket) => {
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
