export interface IErrorDTO {
  name?: string;
  message: string;
  cause: unknown | string;
  status: string | number;
  data?: any;
  error: boolean;
}
