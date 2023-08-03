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

  toStruct() {
    return {
      message: this.message,
      cause: this.cause,
      status: this.status,
      data: this.data,
      error: this.error,
    };
  }

  fromStruct(struct: IError): AppError {
    return new AppError(
      struct.message,
      struct.status,
      struct.data,
      struct.error,
    );
  }
}
