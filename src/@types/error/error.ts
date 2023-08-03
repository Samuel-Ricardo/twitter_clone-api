export interface IError {
  error: true | boolean;
  message: string;
  status: 400 | number;
  data?: any;
}
