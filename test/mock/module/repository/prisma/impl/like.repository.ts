import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaLikeRepository = () => mockDeep<PrismaLikeRepository>();

export const simulatePrismaLikeRepository = ({
  container,
}: interfaces.Context) =>
  new PrismaLikeRepository(container.get(MOCK_MODULE.PRISMA));
