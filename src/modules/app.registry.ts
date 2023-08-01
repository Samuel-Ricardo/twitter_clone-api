import 'reflect-metadata';

import { UserRegistry as USER } from './@core/user/user.registry';
import { PrismaRegistry } from './prisma';
import { RepositoryRegistry as REPOSITORY } from './repository/repository.registry';

export const MODULE = {
  ...PrismaRegistry,
  USER,
  REPOSITORY,
  APP: Symbol.for('app'),
};
