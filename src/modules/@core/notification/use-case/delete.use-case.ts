import { IDeleteNotificationDTO } from '../DTO';
import { NotificationRepositoryAccess } from '../repository/repository_access';

export class DeleteNotificationUseCase extends NotificationRepositoryAccess {
  async execute(notification: IDeleteNotificationDTO) {
    return this.repository.delete(notification);
  }
}
