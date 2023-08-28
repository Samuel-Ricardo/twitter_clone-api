import { IErrorEvent, IErrorEventDTO } from './DTO';

export interface IAppEvents {
  supscribeErrorEvents(job: IErrorEvent): Promise<void> | Promise<any>;
  publishErrorEvent(data: IErrorEventDTO): Promise<void> | Promise<any>;
}
