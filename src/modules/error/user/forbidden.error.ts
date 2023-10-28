import { AppError } from '../app.error';

export class ForbiddenError extends AppError {
  constructor(
    public message: string = 'Forbidden',
    public status: number = 403,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
