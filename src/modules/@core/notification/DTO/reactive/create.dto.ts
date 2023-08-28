import { INotificationDTO } from '../notification.dto';

export interface INotificationEventDTO {
  job: (notification: INotificationDTO) => void;
}
