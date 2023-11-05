/*
 * @jest-environment ./test/environment
 */

import supertest from 'supertest';
import { Comment, ICommentDTO, MODULES } from '../../../src/modules';
import { app } from '@/app';
import {
  CREATE_POST_COMMENT_DATA,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
} from '@test/mock/data/comment';
import { comment } from '../../../src/modules/router/comment';
import { ICommentCypher } from '@Core/comment/cypher/comment.cypher';

describe('[MODULE] | COMMENT', () => {
  let commented: ICommentDTO;
  let cypher: ICommentCypher;

  beforeEach(() => (cypher = MODULES.CYPHER.COMMENT()));

  it('[E2E] | should: create => [COMMENT]', async () => {
    const response = await supertest(app)
      .post(comment.prefix)
      .send(CREATE_POST_COMMENT_DATA);

    const body = { comment: cypher.decryptComment(response.body.comment) };

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
    const body = { comments: cypher.decryptComments(response.body.comments) };

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

  it('[E2E] | should: get from [AUTHOR] => [COMMENT]', async () => {
    const response = await supertest(app).get(
      `${comment.prefix}/author/${VALID_POST_COMMENT.authorId}`,
    );
    const body = { comments: cypher.decryptComments(response.body.comments) };

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

  it('[E2E] | should: update => [COMMENT]', async () => {
    const response = await supertest(app).patch(comment.prefix).send({
      id: commented.id,
      body: UPDATE_POST_COMMENT_DATA.body,
    });

    const body = response.body;

    expect(response.status).toBe(200);
    expect(body.comment.id).toEqual(commented.id);
    expect(body.comment.body).toEqual(UPDATE_POST_COMMENT_DATA.body);
    expect(body.comment.body).not.toEqual(commented.body);
  });

  it('[E2E] | Should: delete => [COMMENT]', async () => {
    const response = await supertest(app).delete(
      `${comment.prefix}/${commented.id}`,
    );

    expect(response.status).toBe(204);
  });
});
