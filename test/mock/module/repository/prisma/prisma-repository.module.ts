import { PrismaUserRepository } from '@modules';
import { Container } from 'inversify';
import {
  mockPrismaUserRepository,
  simulatePrismaUserRepository,
} from './user.repository';
import { DeepMockProxy } from 'jest-mock-extended';
import {
  mockPrismaPostRepository,
  simulatePrismaPostRepository,
} from './post.repository';
import { PrismaPostRepository } from '@modules/repository/prisma/post';
import { PrismaClient } from '@prisma/client';
import { PrismaRepositoryMockRegistry } from './prisma-repository.registry';
import { PrismaMockModule } from '../../prisma';

type simulatePostType = {
  repository: PrismaPostRepository;
  prisma: DeepMockProxy<PrismaClient>;
};

const _module = new Container({ autoBindInjectable: true });

export const PrismaRepositoryMockModule = Container.merge(
  _module,
  PrismaMockModule,
);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaUserRepository>>(
  PrismaRepositoryMockRegistry.USER,
).toDynamicValue(mockPrismaUserRepository);

PrismaRepositoryMockModule.bind<PrismaUserRepository>(
  PrismaRepositoryMockRegistry.USER_DEV,
).toDynamicValue(simulatePrismaUserRepository);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaPostRepository>>(
  PrismaRepositoryMockRegistry.POST,
).toDynamicValue(mockPrismaPostRepository);

PrismaRepositoryMockModule.bind<simulatePostType>(
  PrismaRepositoryMockRegistry.POST_DEV,
).toDynamicValue(simulatePrismaPostRepository);
