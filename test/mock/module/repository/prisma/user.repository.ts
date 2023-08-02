import { MODULES, PrismaUserRepository } from '@modules';
import { Container } from 'inversify';
import { MockFactory } from '../../app.factory';

jest.mock('../../../../../src/modules/repository/prisma/user.repository.ts');

const PrismaUserRepositoryMock =
  PrismaUserRepository as jest.Mock<PrismaUserRepository>;

const mockPrismaUserRepository = () =>
  new PrismaUserRepositoryMock(
    MockFactory.PRISMA(),
  ) as jest.Mocked<PrismaUserRepository>;

export const PrismaRepositoryMockRegistry = {
  USER: Symbol.for('UserPrismaRepositoryMock'),
  USER_DEV: Symbol.for('UserPrismaDevRepositoryMock'),
};

export const PrismaRepositoryMockModule = new Container({
  autoBindInjectable: true,
});

PrismaRepositoryMockModule.bind<jest.Mocked<PrismaUserRepository>>(
  PrismaRepositoryMockRegistry.USER,
).toDynamicValue(mockPrismaUserRepository);

PrismaRepositoryMockModule.bind<PrismaUserRepository>(
  PrismaRepositoryMockRegistry.USER_DEV,
).toDynamicValue(
  () =>
    new PrismaUserRepository(
      MockFactory.PRISMA_DEV(),
      MODULES.USER.FOR_PRISMA(),
    ),
);

export const PrismaRepositoryFactoryMock = {
  USER: () =>
    PrismaRepositoryMockModule.get<jest.Mocked<PrismaUserRepository>>(
      PrismaRepositoryMockRegistry.USER,
    ),
  USER_DEV: () =>
    PrismaRepositoryMockModule.get<PrismaUserRepository>(
      PrismaRepositoryMockRegistry.USER_DEV,
    ),
};
