import { IError } from '@Type';

export class AppError extends Error implements IError {
  constructor(
    public message: string,
    public status: number = 400,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message);
  }

  toStruct(): IError {
    return {
      message: this.message,
      status: this.status,
      data: this.data,
      error: this.error,
    };
  }
}
