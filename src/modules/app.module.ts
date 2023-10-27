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
import { CommentModule } from './@core/comment/comment.module';
import { NotificationModule } from './@core/notification/notification.module';
import { ReactiveModule } from './reactive/reactive.module';
import { ServerModule } from './server/server.module';
import cors from 'cors';
import { CRYPTO_MODULE } from './crypto/crypto.module';
import { ARGON_MODULE } from './argon/argon.module';
import { SECURITY_MODULE } from './security/security.module';
import { CYPHER_MODULE } from './cypher/cypher.module';
import { JWT_MODULE } from './jwt/jwt.module';
import { AUTH_MODULE } from './auth/auth.module';

const Module = new Container();

Module.bind<Express>(MODULE.APP).toConstantValue(Application.Instance());
Module.bind(MODULE.BODY_PARSER).toConstantValue(json({ limit: '20mb' }));
Module.bind(MODULE.CORS).toConstantValue(cors({ origin: '*' }));

export const AppModule = Container.merge(
  Module,
  PrismaModule,
  RepositoryModule,
  UserModule,
  PostModule,
  LikeModule,
  FollowModule,
  CommentModule,
  NotificationModule,
  RoutesModule,
  MiddlewareModule,
  ReactiveModule,
  ServerModule,
  CRYPTO_MODULE,
  ARGON_MODULE,
  SECURITY_MODULE,
  CYPHER_MODULE,
  JWT_MODULE,
  AUTH_MODULE,
);
