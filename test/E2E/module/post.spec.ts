/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { post } from '../../../src/modules/router/post/post.router';
import { Post } from '../../../src/modules/@core/post/entity/post.entity';
import supertest from 'supertest';
import { CREATE_POST_DATA } from '@test/mock/data/post';

describe('[MODULE] | Post', () => {
  it('[E2E] | Should: Create => [POST]', async () => {
    const response = await supertest(app)
      .post(post.prefix)
      .send(CREATE_POST_DATA);
    const body: { post: any } = response.body;

    console.log({ body });

    expect(response.status).toBe(201);
    expect(body.post).toHaveProperty('_id');
    expect(body.post._authorId).toBe(CREATE_POST_DATA.authorId);
    expect(body.post._body).toBe(CREATE_POST_DATA.body);
  });

  it('[E2E] | Should: list [all] => [POST]', async () => {
    const response = await supertest(app).get(post.prefix);
    const body: { posts: Post[] } = response.body;

    expect(response.status).toBe(200);

    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts.length).toBeGreaterThanOrEqual(0);
  });
});
