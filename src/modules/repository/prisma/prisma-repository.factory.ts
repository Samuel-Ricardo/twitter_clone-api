import { PrismaCommentRepository } from './comment';
import { PrismaFollowRepository } from './follow';
import { PrismaLikeRepository } from './like';
import { PrismaNotificationRepository } from './notification';
import { PrismaPostRepository } from './post';
import { PrismaRepositoryModule } from './prisma-repository.module';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaUserRepository } from './user/user.repository';

export const PrismaRepositoryFactory = {
  USER: () =>
    PrismaRepositoryModule.get<PrismaUserRepository>(
      PrismaRepositoryRegistry.USER,
    ),
  POST: () =>
    PrismaRepositoryModule.get<PrismaPostRepository>(
      PrismaRepositoryRegistry.POST,
    ),
  LIKE: () =>
    PrismaRepositoryModule.get<PrismaLikeRepository>(
      PrismaRepositoryRegistry.LIKE,
    ),
  FOLLOW: () =>
    PrismaRepositoryModule.get<PrismaFollowRepository>(
      PrismaRepositoryRegistry.FOLLOW,
    ),
  COMMENT: () =>
    PrismaRepositoryModule.get<PrismaCommentRepository>(
      PrismaRepositoryRegistry.COMMENT,
    ),
  NOTIFICATION: () =>
    PrismaRepositoryModule.get<PrismaNotificationRepository>(
      PrismaRepositoryRegistry.NOTIFICATION,
    ),
};
