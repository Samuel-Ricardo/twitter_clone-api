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
import { EmitNotificationCreatedEventUseCase } from '../use-case/events/created.use-case';

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
    @inject(MODULE.NOTIFICATION.USE_CASE.EVENTS.CREATE)
    private readonly emitNotificationCreated: EmitNotificationCreatedEventUseCase,
  ) {}

  async createNotification(notification: ICreateNotificationDTO) {
    const result = await this.create.execute(notification);
    this.emitNotificationCreated.emit(result.toStruct());
    return result;
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
