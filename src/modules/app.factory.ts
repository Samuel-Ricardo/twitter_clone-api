import 'reflect-metadata';
import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory as REPOSITORY } from './repository/repository.factory';
import { PrismaFactory } from './prisma';
import { USER_MODULE as USER } from './@core/user/user.factory';
import { PostFactory as POST } from './@core/post/post.factory';
import { LikeFactory as LIKE } from './@core/like/like.factory';
import { FollowFactory as FOLLOW } from './@core/follow/follow.factory';
import { MiddlewareFactory as MIDDLEWARE } from './middleware/middleware.factory';
import { CommentFactory as COMMENT } from './@core/comment/comment.factory';
import { ReactiveFactory as REACTIVE } from './reactive/reactive.factory';
import { ServerFactory as SERVER } from './server/server.factory';

import { Express } from 'express';
import { RoutesFactory } from './router/router.factory';

export const MODULES = {
  ...PrismaFactory,
  ...RoutesFactory,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
  REPOSITORY,
  MIDDLEWARE,
  REACTIVE,
  SERVER,
  APP: () => AppModule.get<Express>(MODULE.APP),
  BODY_PARSER: () => AppModule.get<any>(MODULE.BODY_PARSER),
};
