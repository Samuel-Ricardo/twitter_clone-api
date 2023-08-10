/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { post } from '../../../src/modules/router/post/post.router';
import { Post } from '../../../src/modules/@core/post/entity/post.entity';
import supertest from 'supertest';
import { CREATE_POST_DATA, VALID_POST, VALID_USER } from '@test/mock/data/post';

describe('[MODULE] | Post', () => {
  let createdPost: Post | undefined = undefined;

  beforeEach(async () => {
    if (createdPost)
      createdPost = (
        await supertest(app).get(`${post.prefix}/${createdPost.id}`)
      ).body.post;
    console.log({ createdPost }, 'BEFPRRRREEEEEEEE');
  });

  it('[E2E] | Should: Create => [POST]', async () => {
    const response = await supertest(app)
      .post(post.prefix)
      .send(CREATE_POST_DATA);
    const body: { post: any } = response.body;

    expect(response.status).toBe(201);
    expect(body.post).toHaveProperty('_id');
    expect(body.post._authorId).toBe(CREATE_POST_DATA.authorId);
    expect(body.post._body).toBe(CREATE_POST_DATA.body);

    createdPost = body.post;
  });

  it('[E2E] | Should: list [all] => [POST]', async () => {
    const response = await supertest(app).get(post.prefix);
    const body: { posts: Post[] } = response.body;

    expect(response.status).toBe(200);

    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts).toHaveLength(1);
  });

  it('[E2E] | Should: create and list [by author] => [POST]', async () => {
    const createResponse = await supertest(app)
      .post(post.prefix)
      .send(CREATE_POST_DATA);
    const createBody: { post: any } = createResponse.body;

    console.log({ createdPost }, 'AUTHOOOOOOOOOOOOOOOOOOOOR');

    expect(createResponse.status).toBe(201);
    expect(createBody.post).toHaveProperty('_id');
    expect(createBody.post._authorId).toBe(CREATE_POST_DATA.authorId);
    expect(createBody.post._authorId).toBe(VALID_USER.id);

    const response = await supertest(app).get(
      post.prefix + '/author/' + VALID_USER.id,
    );
    const body: { posts: any[] } = response.body;

    expect(response.status).toBe(200);
    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts.length).toBeGreaterThanOrEqual(1);
    expect(body.posts[0]._authorId).toBe(VALID_POST.authorId);
    expect(body.posts[0]._authorId).toBe(VALID_USER.id);
  });
});
