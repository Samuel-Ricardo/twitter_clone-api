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

    follow_relation = result;
  });

  it('[INTEGRATION] | Should: get followers => [FOLLOW]', async () => {
    const result = await repository.getFollowers({
      followingId: follow_relation.followingId,
    });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Follow);
    expect(result[0]).toHaveProperty('id');
    expect(result[0].followingId).toBe(follow_relation.followingId);
    expect(result[0].followerId).toBe(follow_relation.followerId);
  });

  it('[INTEGRATION] | Should: get following => [FOLLOW]', async () => {
    const result = await repository.getFollowings({
      followerId: follow_relation.followerId,
    });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Follow);
    expect(result[0]).toHaveProperty('id');
    expect(result[0].followerId).toBe(follow_relation.followerId);
    expect(result[0].followingId).toBe(follow_relation.followingId);
  });

  it('[INTEGRATION] | Should: count => [FOLLOWERS]', async () => {
    const result = await repository.countFollowers({
      followingId: follow_relation.followingId,
    });

    expect(result).toBeDefined();
    expect(result).toBe(1);
  });

  it('[INTEGRATION] | Should: Delete => [FOLLOW]', async () => {
    expect(
      repository.delete({ id: follow_relation.id }),
    ).resolves.not.toThrow();
  });
});
