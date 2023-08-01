import { PrismaMockFactory } from './prisma';
import { PrismaDevFactory } from './prisma/prisma-dev';
import { RepositoryMockFactory as REPOSITORY } from './repository';

export const MockFactory = {
  ...PrismaMockFactory,
  ...PrismaDevFactory,
  REPOSITORY,
};
