import { INotificationDTO, ISetNotificationVisualizedDTO } from '../DTO';

export interface INotificationEvents {
  listenNotificationCreated(scheduled: any): void | any | Promise<void | any>;
  emitNotificationCreated(
    data: INotificationDTO,
  ): void | any | Promise<void | any>;

  listenNotificationVisualized(
    scheduled: any,
  ): void | any | Promise<void | any>;
  emitNotificationVisualized(
    data: ISetNotificationVisualizedDTO,
  ): void | any | Promise<void | any>;
}
