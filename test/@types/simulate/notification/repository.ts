import { PrismaNotificationRepository } from '../../../../src/modules/repository/prisma/notification';
import { ISimulatePrismaRepository } from '../repository';

export interface ISimulatedPrismaNotificationRepository
  extends ISimulatePrismaRepository<PrismaNotificationRepository> {}
