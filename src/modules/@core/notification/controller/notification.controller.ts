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
    return {
      notification: (await this.service.createNotification(data)).toStruct(),
    };
  }

  async delete(notification: IDeleteNotificationDTO) {
    return this.service.delete(notification);
  }

  async listUserNotifications(user: IGetNotificationByUserDTO) {
    const result = await this.service.listUserNotifications(user);
    const notifications = result.map((notification) => notification.toStruct());

    return { notifications };
  }

  async visualize(notification: ISetNotificationVisualizedDTO) {
    notification.visualizedAt = new Date(notification.visualizedAt);
    return {
      notification: (
        await this.service.visualizeNotification(notification)
      ).toStruct(),
    };
  }
}
