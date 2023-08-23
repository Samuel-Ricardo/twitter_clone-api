import 'reflect-metadata';

import { UserRegistry as USER } from './@core/user/user.registry';
import { PostRegistry as POST } from './@core/post/post.registry';
import { LikeRegistry as LIKE } from './@core/like/like.registry';
import { FollowRegistry as FOLLOW } from './@core/follow/follow.registry';
import { PrismaRegistry } from './prisma';
import { RepositoryRegistry as REPOSITORY } from './repository/repository.registry';
import { RoutesRegistry } from './router/router.registry';
import { MiddlewareRegistry as MIDDLEWARE } from './middleware/middleware.registry';
import { CommentRegistry as COMMENT } from './@core/comment/comment.registry';
import { ReactiveRegistry as REACTIVE } from './reactive/reactive.registry';
import { ServerRegistry as SERVER } from './server/server.registry';

export const MODULE = {
  ...PrismaRegistry,
  ...RoutesRegistry,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
  REPOSITORY,
  MIDDLEWARE,
  REACTIVE,
  SERVER,
  APP: Symbol.for('app'),
  BODY_PARSER: Symbol.for('app.body-parser'),
  ROUTES: Symbol.for('app.routes'),
  SERVER: Symbol.for('app.server'),
};
