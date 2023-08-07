/*
 *@jest-environment ../test/environment.js
 */

import { PrismaPostRepository } from '@modules/repository/prisma/post';
import { PrismaClient } from '@prisma/client';
import { MockFactory } from '@test/mock';
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
});
