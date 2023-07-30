import { Container } from 'inversify';
import {
  PrismaMockResgistry,
  PrismaMockModule,
  PrismaMockFactory,
} from './prisma';
import {
  PrismaRepositoryMockModule,
  PrismaRepositoryMockRegistry,
} from './repository/prisma/user.repository';
import { RepositoryMockFactory } from './repository/repository.module';
import { PrismaDevFactory } from './prisma/prisma-dev';

export const MODULE_MOCK = {
  ...PrismaMockResgistry,
  PRISMA: { ...PrismaRepositoryMockRegistry },
};

export const AppModuleMock = Container.merge(
  PrismaMockModule,
  PrismaRepositoryMockModule,
);

export const MockFactory = {
  ...PrismaMockFactory,
  ...PrismaDevFactory,
  REPOSITORY: { ...RepositoryMockFactory },
};
