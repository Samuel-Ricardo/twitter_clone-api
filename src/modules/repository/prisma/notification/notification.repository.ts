import { PrismaClient } from '@prisma/client';
import { INotificationRepository } from '../../../@core/notification/repository';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules';
import {
  ICreateNotificationDTO,
  IGetNotificationByUserDTO,
} from '../../../@core/notification/DTO';
import { Notification } from '../../../@core/notification/entity';

@injectable()
export class PrismaNotificationRepository implements INotificationRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}

  async create(notification: ICreateNotificationDTO) {
    const result = await this.prisma.notification.create({
      data: notification,
    });

    return Notification.fromPrisma(result);
  }

  async getByUser(notification: IGetNotificationByUserDTO) {
    const result = await this.prisma.notification.findMany({
      where: notification,
    });

    return Notification.fromPrismaArray(result);
  }
}
