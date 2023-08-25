import 'reflect-metadata';

import { UserRegistry as USER } from './@core/user/user.registry';
import { PostRegistry as POST } from './@core/post/post.registry';
import { LikeRegistry as LIKE } from './@core/like/like.registry';
import { FollowRegistry as FOLLOW } from './@core/follow/follow.registry';
import { NotificationRegistry as NOTIFICATION } from './@core/notification/notification.registry';
import { PrismaRegistry } from './prisma';
import { RepositoryRegistry as REPOSITORY } from './repository/repository.registry';
import { RoutesRegistry } from './router/router.registry';
import { MiddlewareRegistry as MIDDLEWARE } from './middleware/middleware.registry';
import { CommentRegistry as COMMENT } from './@core/comment/comment.registry';
import { ReactiveRegistry as REACTIVE } from './reactive/reactive.registry';
import { ServerRegistry as SERVER } from './server/server.registry';
import { EventsRegistry as EVENTS } from './event/event.registry';

export const MODULE = {
  ...PrismaRegistry,
  ...RoutesRegistry,
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
  APP: Symbol.for('app'),
  BODY_PARSER: Symbol.for('app.body-parser'),
  ROUTES: Symbol.for('app.routes'),
};
