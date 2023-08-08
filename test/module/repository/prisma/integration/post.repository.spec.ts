/*
 *@jest-environment ./test/environment.js
 */

import { MODULES } from '@modules';
import { PrismaPostRepository } from '../../../../../src/modules/repository/prisma/post/post.repository';

describe('[REPOSITORY] | Post', () => {
  let repository: PrismaPostRepository;

  beforeEach(() => {
    repository = MODULES.REPOSITORY.PRISMA.POST();
    expect(repository).toBeInstanceOf(PrismaPostRepository);
  });

  it('[UNIT] | Should: Create => [POST]', async () => {
    expect(true).toBeTruthy();
  });
});
