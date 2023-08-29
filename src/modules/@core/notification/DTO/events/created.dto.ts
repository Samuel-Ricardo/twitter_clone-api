import { INotificationDTO } from '../notification.dto';

export interface ICreatedNotificationDTO {
  job: (notification: INotificationDTO) => any | Promise<any>;
}
