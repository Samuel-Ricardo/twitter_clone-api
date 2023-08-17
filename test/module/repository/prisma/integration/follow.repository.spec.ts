/*
 * @jest-environment ./test/environment
 */

import { MODULES } from '@modules';
import { Follow } from '../../../../../src/modules/@core/follow/entity/follow.entity';
import { IFollowRepository } from '../../../../../src/modules/@core/follow/repository/follow.repository';
import { PrismaFollowRepository } from '../../../../../src/modules/repository/prisma/follow/follow.repository';
import { CREATE_FOLLOW_DATA } from '@test/mock/data/follow';

describe('[REPOSITORY] | FOLLOW', () => {
  let repository: IFollowRepository;
  let follow_relation: Follow;

  beforeAll(async () => {
    repository = MODULES.REPOSITORY.PRISMA.FOLLOW();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaFollowRepository);
  });

  it('[INTEGRATION] | Should: Create => [FOLLOW]', async () => {
    const result = await repository.create(CREATE_FOLLOW_DATA);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Follow);
    expect(result).toHaveProperty('id');
    expect(result.followerId).toBe(CREATE_FOLLOW_DATA.followerId);
    expect(result.followingId).toBe(CREATE_FOLLOW_DATA.followingId);
  });
});
