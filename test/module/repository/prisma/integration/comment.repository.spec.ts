/*
 * @jest-environment ./test/environment
 */

import {
  MODULES,
  Comment,
  ICommentRepository,
} from '../../../../../src/modules';
import {
  CREATE_POST_COMMENT_DATA,
  UPDATE_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[REPOSITORY] | PRISMA => [COMMENT]', () => {
  let repositoy: ICommentRepository;
  let commented: Comment;

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

    commented = result;
  });

  it('[INTEGRATION] | Shoudl: find by [POST] => [COMMENT]', async () => {
    const result = await repositoy.getPostComments({
      postId: commented.postId,
    });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Comment);

    expect(result[0]).toHaveProperty('_id');
    expect(result[0]).toStrictEqual(commented);
  });

  it('[INTEGRATION] | Should: find by [USER] => [COMMENT]', async () => {
    const result = await repositoy.getUserComments({
      authorId: commented.authorId,
    });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(Comment);

    expect(result[0]).toHaveProperty('_id');
    expect(result[0]).toStrictEqual(commented);
  });

  it('[INTEGRATION] | Should: Update => [COMMENT]', async () => {
    const result = await repositoy.update({
      id: commented.id,
      body: UPDATE_POST_COMMENT_DATA.body,
    });

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Comment);

    expect(result).toHaveProperty('_id');
    expect(result.id).toBe(commented.id);

    expect(result.body).toBe(UPDATE_POST_COMMENT_DATA.body);

    commented = result;
  });

  it('[INTEGRATION] | Should: delete => [COMMENT]', async () => {
    expect(repositoy.delete({ id: commented.id })).resolves.not.toThrowError();
  });
});
