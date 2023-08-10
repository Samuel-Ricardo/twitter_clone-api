import { AppError } from '../app.error';

export class NotFoundError extends AppError {
  constructor(
    public message: string = 'Not Found',
    public status: number = 404,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
