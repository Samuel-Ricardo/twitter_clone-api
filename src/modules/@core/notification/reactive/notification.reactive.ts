import { INotificationDTO } from '../DTO';
import { INotificationEventDTO } from '../DTO/reactive';

export interface IReactiveNotification {
  publishNotificationCreated(notification: INotificationDTO): void;
  subscribeToNewNotification(execute: INotificationEventDTO): void;

  publishNotificationVisualized(notification: INotificationDTO): void;
  subscribeToNotificationVisualized(execute: INotificationEventDTO): void;

  setupToggleNotification(context: any): void;
}
