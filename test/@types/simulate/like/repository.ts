import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatePrismaLikeRepository {
  repository: PrismaLikeRepository;
  prisma: DeepMockProxy<PrismaClient>;
}
