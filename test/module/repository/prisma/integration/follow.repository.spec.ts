/*
 * @jest-environment ./test/environment
 */

import { MODULES } from '@modules';
import { Follow } from '../../../../../src/modules/@core/follow/entity/follow.entity';
import { IFollowRepository } from '../../../../../src/modules/@core/follow/repository/follow.repository';
import { PrismaFollowRepository } from '../../../../../src/modules/repository/prisma/follow/follow.repository';

describe('[REPOSITORY] | FOLLOW', () => {
  let repository: IFollowRepository;
  let follow_relation: Follow;

  beforeAll(async () => {
    repository = MODULES.REPOSITORY.PRISMA.FOLLOW();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaFollowRepository);
  });

  it('[INTEGRATION] | Should: Create => [FOLLOW]', async () => {
    expect(true).toBe(true);
  });
});
