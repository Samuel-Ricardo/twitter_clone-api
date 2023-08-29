import { PrismaClient } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';
import { PrismaRepositoryMockModule } from './prisma-repository.module';
import {
  PrismaUserRepository,
  PrismaPostRepository,
  PrismaCommentRepository,
} from '@modules';
import { PrismaRepositoryMockRegistry } from './prisma-repository.registry';
import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import { PrismaFollowRepository } from '@modules/repository/prisma/follow';
import { ISimulateFollowRepository } from '@test/@types/simulate/follow/repository';
import { ISimulatePrismaRepository } from '@test/@types/simulate/repository';
import { PrismaNotificationRepository } from '@modules/repository/prisma/notification';
import { ISimulatedPrismaNotificationRepository } from '@test/@types/simulate/notification/repository';

type simulatePostType = {
  repository: PrismaPostRepository;
  prisma: DeepMockProxy<PrismaClient>;
};

export const PrismaRepositoryFactoryMock = {
  USER: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaUserRepository>>(
      PrismaRepositoryMockRegistry.USER,
    ),
  USER_DEV: () =>
    PrismaRepositoryMockModule.get<PrismaUserRepository>(
      PrismaRepositoryMockRegistry.USER_DEV,
    ),
  POST: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaPostRepository>>(
      PrismaRepositoryMockRegistry.POST,
    ),
  POST_DEV: () =>
    PrismaRepositoryMockModule.get<simulatePostType>(
      PrismaRepositoryMockRegistry.POST_DEV,
    ),
  LIKE: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaLikeRepository>>(
      PrismaRepositoryMockRegistry.LIKE,
    ),
  LIKE_DEV: () =>
    PrismaRepositoryMockModule.get<ISimulatePrismaLikeRepository>(
      PrismaRepositoryMockRegistry.LIKE_DEV,
    ),
  FOLLOW: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaFollowRepository>>(
      PrismaRepositoryMockRegistry.FOLLOW,
    ),
  FOLLOW_DEV: () =>
    PrismaRepositoryMockModule.get<ISimulateFollowRepository>(
      PrismaRepositoryMockRegistry.FOLLOW_DEV,
    ),
  COMMENT: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaCommentRepository>>(
      PrismaRepositoryMockRegistry.COMMENT,
    ),
  COMMENT_DEV: () =>
    PrismaRepositoryMockModule.get<
      ISimulatePrismaRepository<PrismaCommentRepository>
    >(PrismaRepositoryMockRegistry.COMMENT_DEV),
  NOTIFICATION: () =>
    PrismaRepositoryMockModule.get<DeepMockProxy<PrismaNotificationRepository>>(
      PrismaRepositoryMockRegistry.NOTIFICATION,
    ),
  NOTIFICATION_DEV: () =>
    PrismaRepositoryMockModule.get<ISimulatedPrismaNotificationRepository>(
      PrismaRepositoryMockRegistry.NOTIFICATION_DEV,
    ),
};
