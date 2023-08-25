import { injectable } from 'inversify';
import { NotificationType } from './notification_type.enitity';

@injectable()
export class Notification {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _type: NotificationType,
    private readonly _body: string,
    private readonly _eventId: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
  ) {}
}
