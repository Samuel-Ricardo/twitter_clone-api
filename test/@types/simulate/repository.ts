import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatePrismaRepository<R> {
  prisma: DeepMockProxy<PrismaClient>;
  repository: R;
}
