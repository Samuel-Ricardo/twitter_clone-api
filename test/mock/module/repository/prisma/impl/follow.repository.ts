import { PrismaFollowRepository } from '@modules/repository/prisma/follow';
import { PrismaClient } from '@prisma/client';
import { ISimulateFollowRepository } from '@test/@types/simulate/follow/repository';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockPrismaFollowRepository = () =>
  mockDeep<PrismaFollowRepository>();

export const simulatePrismaFollowRepository = ({
  container,
}: interfaces.Context): ISimulateFollowRepository => {
  const prisma = container.get<DeepMockProxy<PrismaClient>>(MOCK_MODULE.PRISMA);
  const repository = new PrismaFollowRepository(prisma);
  return { repository, prisma };
};
