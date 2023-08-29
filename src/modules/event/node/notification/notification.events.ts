import { INotificationEvents } from '@Core/notification/events/notification.events';
import { NodeAppEvents } from '../app';
import { injectable } from 'inversify';
import { EVENT } from '../../event.config';
import { ICreatedNotificationEventDTO } from '@Core/notification/DTO/events';

@injectable()
export class NodeNotificationEvents
  extends NodeAppEvents
  implements INotificationEvents
{
  async listenNotificationCreated(scheduled: ICreatedNotificationEventDTO) {
    this.events.on(EVENT.NOTIFICATION.CREATED, scheduled.job);
  }
}
