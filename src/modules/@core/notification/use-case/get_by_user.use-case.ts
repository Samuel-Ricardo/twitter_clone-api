import { IGetNotificationByUserDTO } from '../DTO';
import { NotificationRepositoryAccess } from '../repository/repository_access';

export class GetUserNotificationsUseCase extends NotificationRepositoryAccess {
  async execute(data: IGetNotificationByUserDTO) {
    return this.repository.getByUser(data);
  }
}
