export interface IErrorDTO {
  name?: string;
  message: string;
  cause: unknown | string;
  status: number;
  data?: any;
  error: boolean;
}
