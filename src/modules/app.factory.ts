import 'reflect-metadata';
import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory as REPOSITORY } from './repository/repository.factory';
import { PrismaFactory } from './prisma';
import { USER_MODULE as USER } from './@core/user/user.factory';
import { PostFactory as POST } from './@core/post/post.factory';
import { LikeFactory as LIKE } from './@core/like/like.factory';
import { FollowFactory as FOLLOW } from './@core/follow/follow.factory';
import { CommentFactory as COMMENT } from './@core/comment/comment.factory';
import { NotificationFactory as NOTIFICATION } from './@core/notification/notification.factory';
import { MiddlewareFactory as MIDDLEWARE } from './middleware/middleware.factory';
import { ReactiveFactory as REACTIVE } from './reactive/reactive.factory';
import { ServerFactory as SERVER } from './server/server.factory';
import { EventsFactory as EVENTS } from './event/event.factory';
import { CRYPTO_FACTORY } from './crypto/crypto.factory';
import { ARGON_FACTORY as ARGON } from './argon/argon.factory';
import { SECURITY_FACTORY as SECURITY } from './security/security.factory';
import { CYPHER_FACTORY as CYPHER } from './cypher/cypher.factory';

import { Express } from 'express';
import { RoutesFactory as ROUTER } from './router/router.factory';

import cors from 'cors';

export const MODULES = {
  ...PrismaFactory,
  ...CRYPTO_FACTORY,
  ROUTER,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
  NOTIFICATION,
  REPOSITORY,
  MIDDLEWARE,
  REACTIVE,
  SERVER,
  EVENTS,
  ARGON,
  SECURITY,
  CYPHER,
  APP: () => AppModule.get<Express>(MODULE.APP),
  BODY_PARSER: () => AppModule.get<any>(MODULE.BODY_PARSER),
  CORS: () => AppModule.get<typeof cors>(MODULE.CORS),
};
