import 'reflect-metadata';

import { Container } from 'inversify';
import { PrismaMockModule } from './prisma';
import { PrismaRepositoryMockModule } from './repository/prisma/prisma-repository.module';
import { UserMockModule } from './core/user';
import { PostMockModule } from './core/post';
import { MockLikeModule } from './core/like';
import { FollowMockModule } from './core/follow';
import { NotificationMockModule } from './core/notification';
import { CYPHER_MODULE } from '@modules/cypher/cypher.module';

export const AppModuleMock = Container.merge(
  PrismaMockModule,
  PrismaRepositoryMockModule,
  UserMockModule,
  PostMockModule,
  MockLikeModule,
  FollowMockModule,
  NotificationMockModule,
  CYPHER_MODULE,
);
