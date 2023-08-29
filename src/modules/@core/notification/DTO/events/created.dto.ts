import { INotificationDTO } from '../notification.dto';

export interface ICreatedNotificationEventDTO {
  job: (notification: INotificationDTO) => any | Promise<any>;
}
