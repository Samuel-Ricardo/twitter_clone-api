import { interfaces } from 'inversify';
import { PrismaCommentRepository } from '../../../../../../src/modules/repository/prisma/comment';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaMockResgistry } from '@test/mock/module/prisma';
import { ISimulatePrismaRepository } from '@test/@types/simulate/repository';

export const mockPrismaCommentRepository = () =>
  mockDeep<PrismaCommentRepository>();

export const simulatePrismaCommentRepository = ({
  container,
}: interfaces.Context): ISimulatePrismaRepository<PrismaCommentRepository> => {
  const prisma = container.get<DeepMockProxy<PrismaClient>>(
    PrismaMockResgistry.PRISMA,
  );

  const repository = new PrismaCommentRepository(prisma);

  return { prisma, repository };
};
