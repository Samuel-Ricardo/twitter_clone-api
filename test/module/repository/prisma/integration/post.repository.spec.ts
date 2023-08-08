/*
 *@jest-environment ./test/environment.js
 */

import { MODULES } from '@modules';
import { PrismaPostRepository } from '../../../../../src/modules/repository/prisma/post/post.repository';
import { CREATE_POST_DATA, VALID_POST, VALID_POST_DATA } from '@test/mock/data/post';

describe('[REPOSITORY] | Post', () => {
  let repository: PrismaPostRepository;

  beforeEach(() => {
    repository = MODULES.REPOSITORY.PRISMA.POST();
    expect(repository).toBeInstanceOf(PrismaPostRepository);
  });

  it('[INTEGRATION] | Should: Create => [POST]', async () => {
    
    const result = await repository.create(CREATE_POST_DATA);

    expect(result).toHaveProperty('id');
    expect(result.authorId).toEqual(CREATE_POST_DATA.authorId);
    expect(result.body).toEqual(CREATE_POST_DATA.body);
    expect(result.image).toEqual(CREATE_POST_DATA.image);
  });
});
