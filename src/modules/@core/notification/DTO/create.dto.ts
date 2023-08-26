import { NotificationType } from '@prisma/client';

export interface ICreateNotificationDTO {
  userId: string;
  type: NotificationType;
  body: string;
  eventId: string;
}
