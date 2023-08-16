import { PrismaFollowRepository } from '@modules/repository/prisma/follow';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaFollowRepository = () =>
  mockDeep<PrismaFollowRepository>();
