import { PrismaMockResgistry } from './prisma';
import { PrismaRepositoryMockRegistry as REPOSITORY } from './repository';
import { UserMockRegistry as USER } from './core/user';
import { PostMockRegistry as POST } from './core/post';
import { MockLikeRegistry as LIKE } from './core/like';

export const MOCK_MODULE = {
  ...PrismaMockResgistry,
  REPOSITORY,
  USER,
  POST,
  LIKE,
};
