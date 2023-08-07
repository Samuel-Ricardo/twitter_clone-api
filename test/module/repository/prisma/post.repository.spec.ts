import { PrismaPostRepository } from '../../../../src/modules/repository/prisma/post/post.repository';
import { PrismaClient } from '@prisma/client';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_DATA,
  VALID_POST,
  VALID_POST_DATA,
} from '@test/mock/data/post';
import { Post as PrismaPost } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';

describe('[REPOSITORY] | Post', () => {
  let prisma: DeepMockProxy<PrismaClient>;
  let repository: PrismaPostRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    const mock = MockFactory.REPOSITORY.PRISMA.POST_DEV();

    prisma = mock.prisma;
    repository = mock.repository;

    expect(repository).toBeInstanceOf(PrismaPostRepository);
    expect(prisma.post.create).toHaveProperty('mockResolvedValue');
  });

  it('[UNIT] | Should: Create => [POST]', async () => {
    expect(true).toBe(true);
  });
});
