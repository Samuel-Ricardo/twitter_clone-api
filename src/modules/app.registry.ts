import { PrismaRegistry } from './prisma';
import { RepositoryRegistry } from './repository/repository.registry';

export const MODULE = {
  ...PrismaRegistry,
  REPOSITORY: { ...RepositoryRegistry },
  APP: Symbol.for('app'),
};
