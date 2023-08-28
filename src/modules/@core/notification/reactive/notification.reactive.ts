import { INotificationDTO } from '../DTO';
// import { INotificationEventDTO } from '../DTO/reactive';

export interface IReactiveNotification<C> {
  publishNotificationCreated(
    notification: INotificationDTO,
    context?: C,
  ): Promise<void>;
  subscribeToNewNotification(context: C): Promise<void>;

  publishNotificationVisualized(
    notification: INotificationDTO,
    context?: C,
  ): Promise<void>;
  subscribeToNotificationVisualized(conext: C): Promise<void>;

  setupToggleNotification(context: C): Promise<void>;
}
