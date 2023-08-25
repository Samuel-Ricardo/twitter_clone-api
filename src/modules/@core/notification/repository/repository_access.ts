import { inject, injectable } from 'inversify';
import { INotificationRepository } from './notification.repository';
import { MODULE } from '@modules';

@injectable()
export abstract class NotificationRepositoryAccess {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.NOTIFICATION)
    protected readonly repository: INotificationRepository,
  ) {}
}
