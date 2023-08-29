import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';
import { INotificationEvents } from './notification.events';

@injectable()
export abstract class NotificationEventSupport {
  constructor(
    @inject(MODULE.EVENTS.NODE.NOTIFICATION)
    protected readonly events: INotificationEvents,
  ) {}
}
