import { IErrorDTO } from '@Type';

export const errorToStruct = (error: Error): IErrorDTO => ({
  name: error.name,
  status: 500,
  message: error.message,
  cause: error.cause,
  error: true,
});
