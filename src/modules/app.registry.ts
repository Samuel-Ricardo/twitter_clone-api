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
import { CRYPTO_REGISTRY } from './crypto/crypto.registry';
import { ARGON_REGISTRY as ARGON } from './argon/argon.registry';
import { SECURITY_REGISTRY as SECURITY } from './security/security.registry';
import { CYPHER_REGISTRY as CYPHER } from './cypher/cypher.registry';
import { JWT_REGISTRY } from './jwt/jwt.registry';

export const MODULE = {
  ...PrismaRegistry,
  ...RoutesRegistry,
  ...CRYPTO_REGISTRY,
  ...JWT_REGISTRY,
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
  APP: Symbol.for('app'),
  BODY_PARSER: Symbol.for('app.body-parser'),
  ROUTES: Symbol.for('app.routes'),
  CORS: Symbol.for('app.cors'),
};
