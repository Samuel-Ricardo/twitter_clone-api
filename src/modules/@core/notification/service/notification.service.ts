import { MODULE } from '@modules';
import { inject, injectable } from 'inversify';
import {
  CreateNotificationUseCase,
  VisualizeNotificationUseCase,
  GetUserNotificationsUseCase,
  DeleteNotificationUseCase,
} from '../use-case';
import {
  ICreateNotificationDTO,
  ISetNotificationVisualizedDTO,
  IGetNotificationByUserDTO,
  IDeleteNotificationDTO,
} from '../DTO';

@injectable()
export class NotificationService {
  constructor(
    @inject(MODULE.NOTIFICATION.USE_CASE.CREATE)
    private readonly create: CreateNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.VISUALIZE)
    private readonly visualize: VisualizeNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.GET.BY.USER)
    private readonly getUserNotifications: GetUserNotificationsUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.DELETE)
    private readonly deleteNotification: DeleteNotificationUseCase,
  ) {}

  async createNotification(notification: ICreateNotificationDTO) {
    return await this.create.execute(notification);
  }

  async visualizeNotification(notification: ISetNotificationVisualizedDTO) {
    // const notification = getByID();
    // policy.execute(notification);
    return await this.visualize.execute(notification);
  }

  async listUserNotifications(user: IGetNotificationByUserDTO) {
    return await this.getUserNotifications.execute(user);
  }

  async delete(notification: IDeleteNotificationDTO) {
    return await this.deleteNotification.execute(notification);
  }
}
