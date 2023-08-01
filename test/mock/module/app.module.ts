import { Container } from 'inversify';
import { PrismaMockModule } from './prisma';
import { PrismaRepositoryMockModule } from './repository/prisma/user.repository';

export const AppModuleMock = Container.merge(
  PrismaMockModule,
  PrismaRepositoryMockModule,
);
