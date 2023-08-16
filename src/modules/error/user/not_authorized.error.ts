import { AppError } from '../app.error';

export class UserNotAuthorizedError extends AppError {
  constructor(
    public message: string = 'User not authorized',
    public status: number = 403,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
