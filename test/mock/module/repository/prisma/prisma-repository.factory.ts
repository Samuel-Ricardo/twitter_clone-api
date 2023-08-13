import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';
import { PrismaRepositoryMockModule } from './prisma-repository.module';
import { PrismaUserRepository, PrismaPostRepository } from '@modules';
import { PrismaRepositoryMockRegistry } from './prisma-repository.registry';
import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';

type simulatePostType = {
  repository: PrismaPostRepository;
  prisma: DeepMockProxy<PrismaClient>;
};

export const PrismaRepositoryFactoryMock = {
  USER: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaUserRepository>>(
      PrismaRepositoryMockRegistry.USER,
    ),
  USER_DEV: () =>
    PrismaRepositoryMockModule.get<PrismaUserRepository>(
      PrismaRepositoryMockRegistry.USER_DEV,
    ),
  POST: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaPostRepository>>(
      PrismaRepositoryMockRegistry.POST,
    ),
  POST_DEV: () =>
    PrismaRepositoryMockModule.get<simulatePostType>(
      PrismaRepositoryMockRegistry.POST_DEV,
    ),
  LIKE: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaLikeRepository>>(
      PrismaRepositoryMockRegistry.LIKE,
    ),
  LIKE_DEV: () =>
    PrismaRepositoryMockModule.get<ISimulatePrismaLikeRepository>(
      PrismaRepositoryMockRegistry.LIKE_DEV,
    ),
};
