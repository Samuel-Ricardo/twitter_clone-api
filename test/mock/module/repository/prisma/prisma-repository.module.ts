import { MODULES, PrismaUserRepository } from '@modules';
import { Container } from 'inversify';
import { mockPrismaUserRepository } from './user.repository';
import { MockFactory } from '../../app.factory';
import { DeepMockProxy } from 'jest-mock-extended';
import {
  mockPrismaPostRepository,
  simulatePrismaPostRepository,
} from './post.repository';
import { PrismaPostRepository } from '@modules/repository/prisma/post';
import { PrismaClient } from '@prisma/client';

type simulatePostType = {
  repository: PrismaPostRepository;
  prisma: DeepMockProxy<PrismaClient>;
};

export const PrismaRepositoryMockRegistry = {
  USER: Symbol.for('UserPrismaRepositoryMock'),
  USER_DEV: Symbol.for('UserPrismaDevRepositoryMock'),
  POST: Symbol.for('PostPrismaRepositoryMock'),
  POST_DEV: Symbol.for('PostPrismaDevRepositoryMock'),
};

export const PrismaRepositoryMockModule = new Container({
  autoBindInjectable: true,
});

PrismaRepositoryMockModule.bind<jest.Mocked<PrismaUserRepository>>(
  PrismaRepositoryMockRegistry.USER,
).toDynamicValue(mockPrismaUserRepository);

PrismaRepositoryMockModule.bind<PrismaUserRepository>(
  PrismaRepositoryMockRegistry.USER_DEV,
).toDynamicValue(
  () =>
    new PrismaUserRepository(
      MockFactory.PRISMA_DEV(),
      MODULES.USER.FOR_PRISMA(),
    ),
);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaPostRepository>>(
  mockPrismaPostRepository,
);

PrismaRepositoryMockModule.bind<simulatePostType>(simulatePrismaPostRepository);

export const PrismaRepositoryFactoryMock = {
  USER: () =>
    PrismaRepositoryMockModule.get<jest.Mocked<PrismaUserRepository>>(
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
