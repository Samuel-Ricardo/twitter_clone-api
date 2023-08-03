import { AppError } from '../app.error';

export class InvalidDataError extends AppError {
  constructor(
    public message: string = 'Invalid data',
    public status: number = 422,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
