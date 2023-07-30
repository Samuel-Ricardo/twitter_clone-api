import { PrismaRepositoryFactory } from './prisma';

export const RepositoryFactory = {
  PRISMA: {
    ...PrismaRepositoryFactory,
  },
};
