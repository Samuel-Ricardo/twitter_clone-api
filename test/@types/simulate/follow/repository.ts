import { IFollowRepository } from '../../../../src/modules/@core/follow/repository';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateFollowRepository {
  repository: IFollowRepository;
  prisma: DeepMockProxy<PrismaClient>;
}
