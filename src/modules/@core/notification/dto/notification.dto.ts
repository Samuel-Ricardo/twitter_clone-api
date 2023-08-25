export interface INotificationDTO {
  id: string;
  userId: string;
  type: string;
  body: string;
  eventId: string;
  createdAt: Date;
  updatedAt: Date;
  visualizedAt?: Date;
}
