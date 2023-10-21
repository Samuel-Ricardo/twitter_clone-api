import { PrismaClient } from '@prisma/client';
import { INotificationRepository } from '../../../@core/notification/repository';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules';
import {
  ICreateNotificationDTO,
  IDeleteNotificationDTO,
  IGetNotificationByUserDTO,
  ISetNotificationVisualizedDTO,
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
      orderBy: { createdAt: 'desc' },
    });

    return Notification.fromPrismaArray(result);
  }

  async delete(notification: IDeleteNotificationDTO) {
    await this.prisma.notification.delete({
      where: notification,
    });
  }

  async setVisualized(notification: ISetNotificationVisualizedDTO) {
    const result = await this.prisma.notification.update({
      where: { id: notification.id },
      data: { visualizedAt: notification.visualizedAt },
    });

    result.visualizedAt = new Date(notification.visualizedAt);

    return Notification.fromPrisma(result);
  }
}
