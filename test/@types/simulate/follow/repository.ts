import { IFollowRepository } from '@Core';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateFollowRepository {
  repository: IFollowRepository;
  prisma: DeepMockProxy<PrismaClient>;
}
