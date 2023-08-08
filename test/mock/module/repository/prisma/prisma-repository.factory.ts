import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';
import { PrismaRepositoryMockModule } from './prisma-repository.module';
import { PrismaUserRepository, PrismaPostRepository } from '@modules';
import { PrismaRepositoryMockRegistry } from './prisma-repository.registry';

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
};
