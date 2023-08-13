import { PrismaPostRepository } from '../../../../../../src/modules/repository/prisma/post/post.repository';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaMockResgistry } from '../../../prisma';
import { PrismaClient } from '@prisma/client';

export const mockPrismaPostRepository = () => mockDeep<PrismaPostRepository>();

export const simulatePrismaPostRepository = ({
  container,
}: interfaces.Context) => {
  const prisma = container.get<DeepMockProxy<PrismaClient>>(
    PrismaMockResgistry.PRISMA,
  );

  const repository = new PrismaPostRepository(prisma);

  return { repository, prisma };
};
