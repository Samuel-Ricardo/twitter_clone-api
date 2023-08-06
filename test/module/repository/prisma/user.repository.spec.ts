/*
 * @jest-environment ./test/environment.js
 */

import 'reflect-metadata';
import { User as PrismaUser } from '@prisma/client';
import { MODULES, PrismaUserRepository } from '@modules';
import {
  CREATE_USER_DATA,
  VALID_USER,
  VALID_USER_DATA,
} from '@test/mock/data/user';
import { MockFactory } from '@test/mock/module';
import { UpdateUserDTO, User } from '@User';

describe('[REPOSITORY] | User - [UNIT]', () => {
  let repository: PrismaUserRepository;
  let prismaMock = MockFactory.PRISMA();

  beforeEach(() => {
    jest.clearAllMocks();
    prismaMock = MockFactory.PRISMA();
    repository = new PrismaUserRepository(
      prismaMock,
      MODULES.USER.FOR_PRISMA(),
    );

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
    expect(prismaMock.user.create).toHaveBeenCalledWith({
      data: CREATE_USER_DATA,
    });
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
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: {
        id: VALID_USER.id,
      },
    });
  });

  it('[UNIT] | should update a user', async () => {
    const UPDATED_USER = {
      ...VALID_USER,
      name: 'updated name',
    };

    const UPDATED_USER_DATA = {
      ...VALID_USER_DATA,
      name: 'updated name',
    };

    prismaMock.user.update.mockResolvedValue(UPDATED_USER as PrismaUser);

    const user = await repository.update(UPDATED_USER_DATA);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');
    expect(user).toEqual(UPDATED_USER);

    expect(prismaMock.user.update).toHaveBeenCalledTimes(1);
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: {
        id: VALID_USER.id,
      },
      data: {
        ...UPDATED_USER,
        id: undefined,
      },
    });
  });

  it('[UNIT] | should delete a user', async () => {
    prismaMock.user.delete.mockResolvedValue(VALID_USER as PrismaUser);

    const result = await repository.delete({ id: VALID_USER.id });

    expect(result).toBeTruthy();

    expect(prismaMock.user.delete).toHaveBeenCalledTimes(1);
    expect(prismaMock.user.delete).toHaveBeenCalledWith({
      where: {
        id: VALID_USER.id,
      },
    });
  });
});

describe('[REPOSITORY] | User - [INTEGRATION]', () => {
  let repository: PrismaUserRepository;
  let createdUser: User;

  beforeEach(() => {
    repository = new PrismaUserRepository(
      MODULES.PRISMA(),
      MODULES.USER.FOR_PRISMA(),
    );
  });

  it('[INTEGRATION] - Should: Create => User', async () => {
    const user = await repository.create(CREATE_USER_DATA);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');

    createdUser = user;
  });

  it('[INTEGRATION] - Should: Select All => Users', async () => {
    const users = await repository.selectAll();

    expect(users).toBeDefined();
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThanOrEqual(1);
    expect(users[0]).toBeInstanceOf(User);
    expect(users[0]).toHaveProperty('id');
  });

  it('[INTEGRATION] - Should: Select By Id => User', async () => {
    const user = await repository.selectById({ id: createdUser.id });

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');
    expect(user).toStrictEqual(createdUser);
  });

  it('[INTEGRATION] - Should: Update => User', async () => {
    const UPDATED_USER = {
      id: createdUser.id,
      name: 'updated name',
    };

    const user = await repository.update(UPDATED_USER);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('id');

    expect(user.id).toEqual(createdUser.id);
    expect(user.name).not.toEqual(createdUser.name);
    expect(user.name).toBe('updated name');
    expect(user.email).toEqual(createdUser.email);
  });

  it('[INTEGRATION] - Should: Delete => User', async () => {
    try {
      await repository.delete({ id: createdUser.id });
    } catch (error) {
      expect(error).toBeUndefined();
    }

    expect(repository.selectById({ id: createdUser.id })).rejects.toThrow();
  });
});
