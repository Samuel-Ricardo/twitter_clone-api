import { ISimulatedPrismaNotificationRepository } from '@test/@types/simulate/notification/repository';
import { PrismaNotificationRepository } from '../../../../../../src/modules/repository/prisma/notification';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { PrismaMockResgistry } from '@test/mock/module/prisma';

export const mockPrismaNotificationRepository = () =>
  mockDeep<PrismaNotificationRepository>();

export const simulatePrismaNotificationRepository = ({
  container,
}: interfaces.Context): ISimulatedPrismaNotificationRepository => {
  const prisma = container.get<DeepMockProxy<PrismaClient>>(
    PrismaMockResgistry.PRISMA,
  );
  const repository = new PrismaNotificationRepository(prisma);

  return { prisma, repository };
};
