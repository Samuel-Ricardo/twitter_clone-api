import 'reflect-metadata';

import { Container } from 'inversify';
import { PrismaMockModule } from './prisma';
import { PrismaRepositoryMockModule } from './repository/prisma/user.repository';
import { UserMockModule } from './core/user';

export const AppModuleMock = Container.merge(
  PrismaMockModule,
  PrismaRepositoryMockModule,
  UserMockModule,
);
