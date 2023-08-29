import { PrismaUserRepository } from '@modules';
import { Container } from 'inversify';
import {
  mockPrismaUserRepository,
  simulatePrismaUserRepository,
} from './impl/user.repository';
import { DeepMockProxy } from 'jest-mock-extended';
import {
  mockPrismaPostRepository,
  simulatePrismaPostRepository,
} from './impl/post.repository';
import { PrismaPostRepository } from '../../../../../src/modules/repository/prisma/post/post.repository';
import { PrismaClient } from '@prisma/client';
import { PrismaRepositoryMockRegistry } from './prisma-repository.registry';
import { PrismaMockModule } from '../../prisma';
import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import {
  mockPrismaLikeRepository,
  mockPrismaNotificationRepository,
  simulatePrismaLikeRepository,
  simulatePrismaNotificationRepository,
} from './impl';
import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import {
  mockPrismaFollowRepository,
  simulatePrismaFollowRepository,
} from './impl/follow.repository';
import {
  mockPrismaCommentRepository,
  simulatePrismaCommentRepository,
} from './impl/comment.repository';

type simulatePostType = {
  repository: PrismaPostRepository;
  prisma: DeepMockProxy<PrismaClient>;
};

const _module = new Container({ autoBindInjectable: true });

export const PrismaRepositoryMockModule = Container.merge(
  _module,
  PrismaMockModule,
);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaUserRepository>>(
  PrismaRepositoryMockRegistry.USER,
).toDynamicValue(mockPrismaUserRepository);

PrismaRepositoryMockModule.bind<PrismaUserRepository>(
  PrismaRepositoryMockRegistry.USER_DEV,
).toDynamicValue(simulatePrismaUserRepository);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaPostRepository>>(
  PrismaRepositoryMockRegistry.POST,
).toDynamicValue(mockPrismaPostRepository);

PrismaRepositoryMockModule.bind<simulatePostType>(
  PrismaRepositoryMockRegistry.POST_DEV,
).toDynamicValue(simulatePrismaPostRepository);

PrismaRepositoryMockModule.bind<DeepMockProxy<PrismaLikeRepository>>(
  PrismaRepositoryMockRegistry.LIKE,
).toDynamicValue(mockPrismaLikeRepository);

PrismaRepositoryMockModule.bind<ISimulatePrismaLikeRepository>(
  PrismaRepositoryMockRegistry.LIKE_DEV,
).toDynamicValue(simulatePrismaLikeRepository);

PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.FOLLOW,
).toDynamicValue(mockPrismaFollowRepository);
PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.FOLLOW_DEV,
).toDynamicValue(simulatePrismaFollowRepository);

PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.COMMENT,
).toDynamicValue(mockPrismaCommentRepository);

PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.COMMENT_DEV,
).toDynamicValue(simulatePrismaCommentRepository);

PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.NOTIFICATION,
).toDynamicValue(mockPrismaNotificationRepository);

PrismaRepositoryMockModule.bind(
  PrismaRepositoryMockRegistry.NOTIFICATION_DEV,
).toDynamicValue(simulatePrismaNotificationRepository);
