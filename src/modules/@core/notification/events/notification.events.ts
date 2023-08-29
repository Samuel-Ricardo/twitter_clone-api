import { INotificationDTO, ISetNotificationVisualizedDTO } from '../DTO';
import { ICreatedNotificationEventDTO } from '../DTO/events/created.dto';

export interface INotificationEvents {
  listenNotificationCreated(
    scheduled: ICreatedNotificationEventDTO,
  ): void | any | Promise<void | any>;
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
