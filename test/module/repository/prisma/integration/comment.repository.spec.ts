/*
 * @jest-environment ./test/environment
 */

import {
  MODULES,
  Comment,
  ICommentRepository,
} from '../../../../../src/modules';
import { CREATE_POST_COMMENT_DATA } from '@test/mock/data/comment';

describe('[REPOSITORY] | PRISMA => [COMMENT]', () => {
  let repositoy: ICommentRepository;

  beforeAll(() => {
    repositoy = MODULES.REPOSITORY.PRISMA.COMMENT();

    expect(repositoy).toBeDefined();
  });

  it('[INTEGRATION] | Should: Create => [COMMENT]', async () => {
    const result = await repositoy.create(CREATE_POST_COMMENT_DATA);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Comment);
    expect(result).toHaveProperty('_id');
    expect(result.authorId).toBe(CREATE_POST_COMMENT_DATA.authorId);
    expect(result.body).toBe(CREATE_POST_COMMENT_DATA.body);
    expect(result.postId).toBe(CREATE_POST_COMMENT_DATA.postId);
  });
});
