import { injectable } from 'inversify';
import { NotificationType } from '@prisma/client';
import { INotificationDTO } from '../dto/notification.dto';
import { NotificationSchema } from '../validator';

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
    private readonly _visualizedAt?: Date,
  ) {
    Notification.validate({
      id: _id,
      userId: _userId,
      type: _type,
      body: _body,
      eventId: _eventId,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      visualizedAt: _visualizedAt,
    });
  }

  static validate(notification: INotificationDTO) {
    return NotificationSchema.parse(notification);
  }

  static create(notification: INotificationDTO) {
    return new Notification(
      notification.id,
      notification.userId,
      notification.type,
      notification.body,
      notification.eventId,
      notification.createdAt,
      notification.updatedAt,
      notification.visualizedAt,
    );
  }
}
