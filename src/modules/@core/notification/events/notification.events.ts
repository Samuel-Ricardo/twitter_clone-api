import { INotificationDTO, ISetNotificationVisualizedDTO } from '../DTO';
import { IVisualizedNotificationEventDTO } from '../DTO/events';
import { ICreatedNotificationEventDTO } from '../DTO/events/created.dto';

export interface INotificationEvents {
  listenNotificationCreated(
    scheduled: ICreatedNotificationEventDTO,
  ): void | any | Promise<void | any>;
  emitNotificationCreated(
    data: INotificationDTO,
  ): void | any | Promise<void | any>;

  listenNotificationVisualized(
    scheduled: IVisualizedNotificationEventDTO,
  ): void | any | Promise<void | any>;
  emitNotificationVisualized(
    data: ISetNotificationVisualizedDTO,
  ): void | any | Promise<void | any>;
}
