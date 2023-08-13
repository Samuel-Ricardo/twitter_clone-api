import { MODULES, PrismaUserRepository } from '@modules';
import { interfaces } from 'inversify';
import { MOCK_MODULE } from '../../../app.registry';
import { mockDeep } from 'jest-mock-extended';

// jest.mock(
//   '../../../../../src/modules/repository/prisma/user/user.repository.ts',
// );

// const PrismaUserRepositoryMock =
//   PrismaUserRepository as jest.Mock<PrismaUserRepository>;

// export const mockPrismaUserRepository = ({container}: interfaces.Context) =>
//   new PrismaUserRepositoryMock(
//     container.get(MOCK_MODULE.PRISMA),
//     MODULES.USER.FOR_PRISMA(),
//   ) as jest.Mocked<PrismaUserRepository>;

export const mockPrismaUserRepository = () => mockDeep<PrismaUserRepository>();

export const simulatePrismaUserRepository = (context: interfaces.Context) =>
  new PrismaUserRepository(
    context.container.get(MOCK_MODULE.PRISMA),
    MODULES.USER.FOR_PRISMA(),
  );
