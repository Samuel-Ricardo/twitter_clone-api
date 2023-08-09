import 'reflect-metadata';

import { Container } from 'inversify';
import { PrismaMockModule } from './prisma';
import { PrismaRepositoryMockModule } from './repository/prisma/prisma-repository.module';
import { UserMockModule } from './core/user';
import { PostMockModule } from './core/post';

export const AppModuleMock = Container.merge(
  PrismaMockModule,
  PrismaRepositoryMockModule,
  UserMockModule,
  PostMockModule,
);
