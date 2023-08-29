import { INotificationDTO } from '../../DTO';
import { NotificationEventSupport } from '../../events';

export class EmitNotificationCreatedEventUseCase extends NotificationEventSupport {
  emit(data: INotificationDTO) {
    this.events.emitNotificationCreated(data);
  }
}
