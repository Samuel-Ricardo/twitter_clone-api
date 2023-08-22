/*
 * @jest-environment ./test/environment
 */

import supertest from 'supertest';
import { Comment } from '../../../src/modules';
import { app } from '@/app';
import {
  CREATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
} from '@test/mock/data/comment';
import { comment } from '@modules/router/comment';

describe('[MODULE] | COMMENT', () => {
  let commented: Comment;

  it('[E2E] | should: create => [COMMENT]', async () => {
    const response = await supertest(app)
      .post(comment.prefix)
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

  it('[E2E] | should: get from [POST] => [COMMENT]', async () => {
    const response = await supertest(app).get(
      `${comment.prefix}/post/${VALID_POST_COMMENT.postId}`,
    );
    const body = response.body;

    expect(response.status).toBe(200);
    expect(body.comments).toBeDefined();
    expect(body.comments).toBeInstanceOf(Array);
    expect(body.comments.length).toBeGreaterThanOrEqual(1);
    expect(body.comments[0]).toHaveProperty('id');
    expect(body.comments[0].createdAt).toBeDefined();
    expect(body.comments[0].body).toEqual(VALID_POST_COMMENT.body);
    expect(body.comments[0].authorId).toEqual(VALID_POST_COMMENT.authorId);
    expect(body.comments[0].postId).toEqual(VALID_POST_COMMENT.postId);
  });
});
