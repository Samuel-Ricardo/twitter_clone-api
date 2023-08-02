import 'reflect-metadata';
import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory as REPOSITORY } from './repository/repository.factory';
import { PrismaFactory } from './prisma';
import { USER_MODULE as USER } from './@core/user/user.factory';

import { Express } from 'express';
import { RoutesFactory } from './router/router.factory';

export const MODULES = {
  ...PrismaFactory,
  ...RoutesFactory,
  USER,
  REPOSITORY,
  APP: () => AppModule.get<Express>(MODULE.APP),
  BODY_PARSER: () => AppModule.get(MODULE.BODY_PARSER),
};
