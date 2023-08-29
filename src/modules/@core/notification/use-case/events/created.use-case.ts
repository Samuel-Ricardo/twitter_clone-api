import { injectable } from 'inversify';
import { INotificationDTO } from '../../DTO';
import { NotificationEventSupport } from '../../events';

@injectable()
export class EmitNotificationCreatedEventUseCase extends NotificationEventSupport {
  emit(data: INotificationDTO) {
    this.events.emitNotificationCreated(data);
  }
}
