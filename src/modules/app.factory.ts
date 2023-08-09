import 'reflect-metadata';
import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory as REPOSITORY } from './repository/repository.factory';
import { PrismaFactory } from './prisma';
import { USER_MODULE as USER } from './@core/user/user.factory';
import { PostFactory as POST } from './@core/post/post.factory';
import { MiddlewareFactory as MIDDLEWARE } from './middleware/middleware.factory';

import { Express } from 'express';
import { RoutesFactory } from './router/router.factory';

export const MODULES = {
  ...PrismaFactory,
  ...RoutesFactory,
  USER,
  POST,
  REPOSITORY,
  MIDDLEWARE,
  APP: () => AppModule.get<Express>(MODULE.APP),
  BODY_PARSER: () => AppModule.get<any>(MODULE.BODY_PARSER),
};
