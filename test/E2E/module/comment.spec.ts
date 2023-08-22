/*
 * @jest-environment ./test/environment
 */

import supertest from 'supertest';
import { Comment } from '../../../src/modules';
import { app } from '@/app';
import { CREATE_POST_COMMENT_DATA } from '@test/mock/data/comment';

describe('[MODULE] | COMMENT', () => {
  let commented: Comment;

  it('[E2E] | should: create => [COMMENT]', async () => {
    const response = await supertest(app)
      .post('/comments')
      .send(CREATE_POST_COMMENT_DATA);
    const body = response.body;

    expect(response.status).toBe(201);
    expect(body.comment).toBeDefined();
    expect(body.comment).toHaveProperty('id');
    expect(body.comment.body).toEqual(CREATE_POST_COMMENT_DATA.body);
    expect(body.comment.authorId).toEqual(CREATE_POST_COMMENT_DATA.authorId);
    expect(body.comment.postId).toEqual(CREATE_POST_COMMENT_DATA.postId);

    commented = body.comment;
  });
});
