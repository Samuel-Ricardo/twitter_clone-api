import { AppError } from '../app.error';

export class NoDataProvidedError extends AppError {
  constructor(
    public message: string = 'No data provided',
    public status: number = 404,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
