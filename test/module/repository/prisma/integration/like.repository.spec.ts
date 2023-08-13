/*
 * @jest-environment ./test/environment
 */

import { MODULES } from '@modules';
import { ILikeRepository } from '../../../../../src/modules/@core/like/repository/like.repository';
import { PrismaLikeRepository } from '../../../../../src/modules/repository/prisma/like';
import { CREATE_POST_LIKE_DATA } from '@test/mock/data/like';
import { Like } from '../../../../../src/modules/@core/like';
import { VALID_POST } from '@test/mock/data/post';
import { VALID_USER } from '@test/mock';

describe('[REPOSITORY] LikeRepository', () => {
  let repository: ILikeRepository;

  beforeEach(async () => {
    repository = MODULES.REPOSITORY.PRISMA.LIKE();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaLikeRepository);
  });

  it('[INTEGRATION] | Should: Create => [LIKE]', async () => {
    const result = await repository.create(CREATE_POST_LIKE_DATA);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Like);
    expect(result.userId).toBe(CREATE_POST_LIKE_DATA.userId);
    expect(result.likedId).toBe(CREATE_POST_LIKE_DATA.likedId);
  });

  it('[INTEGRATION] | Should: Find by post => [LIKE]', async () => {
    const result = await repository.getLikesOfPost({ likedId: VALID_POST.id });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Like);
    expect(result[0]).toHaveProperty('id');
    expect(result[0].likedId).toBe(VALID_POST.id);
  });

  it('[INTEGRATION] | Should: Find by user => [LIKE]', async () => {
    const result = await repository.getLikesOfUser({ userId: VALID_USER.id });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Like);
    expect(result[0]).toHaveProperty('id');
    expect(result[0].userId).toBe(VALID_USER.id);
  });
});
