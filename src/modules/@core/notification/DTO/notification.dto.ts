import { NotificationType } from '@prisma/client';

export interface INotificationDTO {
  id: string;
  userId: string;
  type: NotificationType;
  body: string;
  eventId: string;
  createdAt: Date;
  updatedAt: Date;
  visualizedAt?: Date;
}
