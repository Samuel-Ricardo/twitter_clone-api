import { AppError } from '@modules/error';
import { Socket } from 'socket.io';

export interface IErrorEvent {
  job: (data: IErrorEventDTO) => Promise<void> | Promise<any>;
}

export interface IErrorEventDTO {
  socket: Socket;
  error: Error | AppError;
}
