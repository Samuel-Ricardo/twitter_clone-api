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
    private create: CreateNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.VISUALIZE)
    private visualize: VisualizeNotificationUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.GET.BY.USER)
    private getUserNotifications: GetUserNotificationsUseCase,
    @inject(MODULE.NOTIFICATION.USE_CASE.DELETE)
    private deleteNotification: DeleteNotificationUseCase,
  ) {}

  async createNotification(notification: ICreateNotificationDTO) {
    return await this.create.execute(notification);
  }
}
