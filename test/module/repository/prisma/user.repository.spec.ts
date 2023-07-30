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

  it('[UNIT] | should create a user', async () => {
    prismaMock.user.create.mockResolvedValue(VALID_USER as PrismaUser);

    const user = await repository.create(CREATE_USER_DATA);

    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toBeInstanceOf(User);

    expect(prismaMock.user.create).toHaveBeenCalledTimes(1);
  });

  it('[UNIT] | should select all users', async () => {
    prismaMock.user.findMany.mockResolvedValue([VALID_USER as PrismaUser]);

    const users = await repository.selectAll();

    expect(users).toBeDefined();
    expect(users).toBeInstanceOf(Array);
    expect(users).toHaveLength(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(users[0]).toHaveProperty('id');

    expect(prismaMock.user.findMany).toHaveBeenCalledTimes(1);
  });

  it('[UNIT] | should select a user by id', async () => {
    prismaMock.user.findUnique.mockResolvedValue(VALID_USER as PrismaUser);

    const user = await repository.selectById({ id: VALID_USER.id });

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');

    expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
  });
});
