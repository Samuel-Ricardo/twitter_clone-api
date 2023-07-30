import { Container } from 'inversify';
import { PrismaRepositoryRegistry, PrismaRepositoryModule } from './prisma';

export const RepositoryRegistry = {
  PRISMA: { ...PrismaRepositoryRegistry },
};

export { PrismaRepositoryModule as RepositoryModule };
