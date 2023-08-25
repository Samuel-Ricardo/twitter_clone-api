import { MODULE } from '@modules';
import { inject, injectable } from 'inversify';
import { NotificationService } from '../service';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationByUserDTO,
  ISetNotificationVisualizedDTO,
} from '../DTO';

@injectable()
export class NotificationController {
  constructor(
    @inject(MODULE.NOTIFICATION.SERVICE)
    private readonly service: NotificationService,
  ) {}

  async create(data: ICreateNotificationDTO) {
    return { notification: this.service.createNotification(data) };
  }

  async delete(notification: IDeleteNotificationDTO) {
    return this.service.delete(notification);
  }

  async listUserNotifications(user: IGetNotificationByUserDTO) {
    return { notifications: this.service.listUserNotifications(user) };
  }

  async visualize(notification: ISetNotificationVisualizedDTO) {
    return this.service.visualizeNotification(notification);
  }
}
