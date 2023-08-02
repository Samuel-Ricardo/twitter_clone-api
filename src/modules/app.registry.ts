import 'reflect-metadata';

import { UserRegistry as USER } from './@core/user/user.registry';
import { PrismaRegistry } from './prisma';
import { RepositoryRegistry as REPOSITORY } from './repository/repository.registry';
import { RoutesRegistry } from './router/router.registry';

export const MODULE = {
  ...PrismaRegistry,
  ...RoutesRegistry,
  USER,
  REPOSITORY,
  APP: Symbol.for('app'),
  BODY_PARSER: Symbol.for('app.body-parser'),
  ROUTES: Symbol.for('app.routes'),
};
