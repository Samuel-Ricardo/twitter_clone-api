import { PrismaRepositoryRegistry } from './prisma/prisma-repository.registry';

export const RepositoryRegistry = {
  PRISMA: { ...PrismaRepositoryRegistry },
};
