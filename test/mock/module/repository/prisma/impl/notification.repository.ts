import { PrismaNotificationRepository } from '../../../../../../src/modules/repository/prisma/notification';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaNotificationRepository = () =>
  mockDeep<PrismaNotificationRepository>();
