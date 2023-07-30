import { User as PrismaUser } from '@prisma/client';
import { PrismaUserRepository } from '@modules';
import { CREATE_USER_DATA, VALID_USER } from '@test/mock/data/user';
import { MockFactory } from '@test/mock/module/app.module';
import { User } from '@User';

describe('[REPOSITORY] | User', () => {
  let repository: PrismaUserRepository;
  let prismaMock = MockFactory.PRISMA();

  beforeEach(() => {
    jest.clearAllMocks();
    prismaMock = MockFactory.PRISMA();
    repository = new PrismaUserRepository(prismaMock);

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaUserRepository);

    expect(prismaMock).toBeDefined();
  });

  it('[UNIT] | should create a user', async () => {});
});
