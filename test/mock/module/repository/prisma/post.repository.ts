import { PrismaPostRepository } from '@modules/repository/prisma/post';
import { mockDeep } from 'jest-mock-extended';
import { MockFactory } from '../../app.factory';

export const mockPrismaPostRepository = () => mockDeep<PrismaPostRepository>();

export const simulatePrismaPostRepository = () => {
  const prisma = MockFactory.PRISMA();
  const repository = new PrismaPostRepository(prisma);

  return { repository, prisma };
};
