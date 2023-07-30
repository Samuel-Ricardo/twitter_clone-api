import {
  PrismaRepositoryFactoryMock,
  PrismaRepositoryMockModule,
  PrismaRepositoryMockRegistry,
} from './prisma/user.repository';

export const RepositoryMockRegistry = {
  PRISMA: { ...PrismaRepositoryMockRegistry },
};

export const RepositoryMockModule = PrismaRepositoryMockModule;

export const RepositoryMockFactory = {
  PRISMA: { ...PrismaRepositoryFactoryMock },
};
