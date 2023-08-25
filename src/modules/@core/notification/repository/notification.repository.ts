import { Notification } from '../entity';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationByUserDto,
} from '../DTO';

export interface INotificationRepository {
  create(notification: ICreateNotificationDTO): Promise<Notification>;
  delete(notification: IDeleteNotificationDTO): Promise<void>;
  getByUser(notification: IGetNotificationByUserDto): Promise<Notification[]>;
}
