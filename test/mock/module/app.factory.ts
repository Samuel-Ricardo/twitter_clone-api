import { PrismaMockFactory } from './prisma';
import { PrismaDevFactory } from './prisma/prisma-dev';
import { RepositoryMockFactory as REPOSITORY } from './repository/repository.module';
import { UserMockFactory as USER } from './core/user';
import { PostMockFactory as POST } from './core/post';
import { MockLikeFactory as LIKE } from './core/like';
import { FollowMockFactory as FOLLOW } from './core/follow';
import { CommentMockFactory as COMMENT } from './core/comment';
import { NotificationMockFactory as NOTIFICATION } from './core/notification/notification.factory';
import { CYPHER_FACTORY_MOCK as CYPHER } from './cypher/cypher.module';
import { SECURITY_FACTORY_MOCK as SECURITY } from './security/security.factory';

export const MockFactory = {
  ...PrismaMockFactory,
  ...PrismaDevFactory,
  REPOSITORY,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
  NOTIFICATION,
  CYPHER,
  SECURITY,
};
