import { ISetNotificationVisualizedDTO } from '../DTO';
import { NotificationRepositoryAccess } from '../repository/repository_access';

export class VisualizeNotificationUseCase extends NotificationRepositoryAccess {
  async execute(notification: ISetNotificationVisualizedDTO) {
    return this.repository.setVisualized(notification);
  }
}
