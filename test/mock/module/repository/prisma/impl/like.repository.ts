import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { PrismaClient } from '@prisma/client';
import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockPrismaLikeRepository = () => mockDeep<PrismaLikeRepository>();

export const simulatePrismaLikeRepository = ({
  container,
}: interfaces.Context): ISimulatePrismaLikeRepository => {
  const prisma = container.get<DeepMockProxy<PrismaClient>>(MOCK_MODULE.PRISMA);
  const repository = new PrismaLikeRepository(prisma);

  return { repository, prisma };
};
