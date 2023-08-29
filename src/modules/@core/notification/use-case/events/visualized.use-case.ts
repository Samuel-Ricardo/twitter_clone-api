import { ISetNotificationVisualizedDTO } from '../../DTO';
import { NotificationEventSupport } from '../../events';
import { injectable } from 'inversify';

@injectable()
export class EmitNotificationVisualizedEventUseCase extends NotificationEventSupport {
  emit(data: ISetNotificationVisualizedDTO) {
    this.events.emitNotificationVisualized(data);
  }
}
