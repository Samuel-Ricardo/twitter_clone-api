import { PrismaMockResgistry } from './prisma';
import { PrismaRepositoryMockRegistry as REPOSITORY } from './repository';
import { UserMockRegistry as USER } from './core/user';
import { PostMockRegistry as POST } from './core/post';
import { MockLikeRegistry as LIKE } from './core/like';
import { FollowMockRegistry as FOLLOW } from './core/follow';
import { CommentMockRegistry as COMMENT } from './core/comment';
import { NotificationMockRegistry as NOTIFICATION } from './core/notification';
import { CYPHER_REGISTRY_MOCK as CYPHER } from './cypher/cypher.module';

export const MOCK_MODULE = {
  ...PrismaMockResgistry,
  REPOSITORY,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
  NOTIFICATION,
  CYPHER,
};
