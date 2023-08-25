import { ICreateNotificationDTO } from '../DTO';
import { NotificationRepositoryAccess } from '../repository/repository_access';

export class CreateNotificationUseCase extends NotificationRepositoryAccess {
  async execute(notification: ICreateNotificationDTO) {
    return this.repository.create(notification);
  }
}
