/*
 * @jest-environment ./test/environment
 */

import { MODULES } from '@modules';
import { ILikeRepository } from '../../../../../src/modules/@core/like/repository/like.repository';
import { PrismaLikeRepository } from '../../../../../src/modules/repository/prisma/like';
import { CREATE_POST_LIKE_DATA } from '@test/mock/data/like';
import { Like } from '../../../../../src/modules/@core/like';

describe('[REPOSITORY] LikeRepository', () => {
  let repository: ILikeRepository;

  beforeEach(async () => {
    repository = MODULES.REPOSITORY.PRISMA.LIKE();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaLikeRepository);
  });

  it('create', async () => {
    const result = await repository.create(CREATE_POST_LIKE_DATA);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Like);
    expect(result.userId).toBe(CREATE_POST_LIKE_DATA.userId);
    expect(result.likedId).toBe(CREATE_POST_LIKE_DATA.likedId);
  });
});
