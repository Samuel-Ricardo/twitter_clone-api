import { PrismaMockFactory } from './prisma';
import { PrismaDevFactory } from './prisma/prisma-dev';
import { RepositoryMockFactory as REPOSITORY } from './repository/repository.module';
import { UserMockFactory as USER } from './core/user';
import { PostMockFactory as POST } from './core/post';
import { MockLikeFactory as LIKE } from './core/like';
import { FollowMockFactory as FOLLOW } from './core/follow';
import { CommentMockFactory as COMMENT } from './core/comment';

export const MockFactory = {
  ...PrismaMockFactory,
  ...PrismaDevFactory,
  REPOSITORY,
  USER,
  POST,
  LIKE,
  FOLLOW,
  COMMENT,
};
