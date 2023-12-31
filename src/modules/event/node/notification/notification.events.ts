import { INotificationEvents } from '../../../@core/notification/events';
import { NodeAppEvents } from '../app';
import { injectable } from 'inversify';
import { EVENT } from '../../event.config';
import {
  ICreatedNotificationEventDTO,
  IVisualizedNotificationEventDTO,
} from '../../../@core/notification/DTO/events';
import {
  INotificationDTO,
  ISetNotificationVisualizedDTO,
} from '../../../@core/notification/DTO';

@injectable()
export class NodeNotificationEvents
  extends NodeAppEvents
  implements INotificationEvents
{
  async listenNotificationCreated(scheduled: ICreatedNotificationEventDTO) {
    this.events.on(EVENT.NOTIFICATION.CREATED, scheduled.job);
  }

  async listenNotificationVisualized(
    scheduled: IVisualizedNotificationEventDTO,
  ) {
    this.events.on(EVENT.NOTIFICATION.VISUALIZED, scheduled.job);
  }

  async emitNotificationCreated(data: INotificationDTO) {
    this.events.emit(EVENT.NOTIFICATION.CREATED, data);
  }

  async emitNotificationVisualized(data: ISetNotificationVisualizedDTO) {
    this.events.emit(EVENT.NOTIFICATION.VISUALIZED, data);
  }
}
