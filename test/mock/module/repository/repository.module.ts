import { PrismaRepositoryMockRegistry } from './prisma/prisma-repository.registry';
import { PrismaRepositoryMockModule } from './prisma/prisma-repository.module';
import { PrismaRepositoryFactoryMock } from './prisma/prisma-repository.factory';

export const RepositoryMockRegistry = {
  PRISMA: { ...PrismaRepositoryMockRegistry },
};

export const RepositoryMockModule = PrismaRepositoryMockModule;

export const RepositoryMockFactory = {
  PRISMA: { ...PrismaRepositoryFactoryMock },
};
