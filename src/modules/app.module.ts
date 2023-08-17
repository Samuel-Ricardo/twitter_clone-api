import 'reflect-metadata';
import { Application } from './manager';

import { Container } from 'inversify';
import { PrismaModule } from './prisma/prisma.module';
import { RepositoryModule } from './repository/repository.module';

import { Express, json } from 'express';
import { MODULE } from './app.registry';
import { UserModule } from '@User';
import { RoutesModule } from './router/router.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { PostModule } from './@core/post/post.module';
import { LikeModule } from './@core/like/like.module';
import { FollowModule } from './@core/follow/follow.module';

const Module = new Container();

Module.bind<Express>(MODULE.APP).toConstantValue(Application.Instance());
Module.bind(MODULE.BODY_PARSER).toConstantValue(json());

export const AppModule = Container.merge(
  Module,
  PrismaModule,
  RepositoryModule,
  UserModule,
  PostModule,
  LikeModule,
  FollowModule,
  RoutesModule,
  MiddlewareModule,
);
