import { Notification } from '../entity';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';

export interface INotificationRepository {
  create(notification: ICreateNotificationDTO): Promise<Notification>;
  setVisualized(
    notification: ISetNotificationVisualizedDTO,
  ): Promise<Notification>;
  delete(notification: IDeleteNotificationDTO): Promise<void>;
  getByUser(notification: IGetNotificationByUserDTO): Promise<Notification[]>;
}
