import { PrismaMockFactory } from './prisma';
import { PrismaDevFactory } from './prisma/prisma-dev';
import { RepositoryMockFactory as REPOSITORY } from './repository/repository.module';
import { UserMockFactory as USER } from './core/user';
import { PostMockFactory as POST } from './core/post';

export const MockFactory = {
  ...PrismaMockFactory,
  ...PrismaDevFactory,
  REPOSITORY,
  USER,
  POST,
};
