/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { post } from '../../../src/modules/router/post/post.router';
import { Post } from '../../../src/modules/@core/post/entity/post.entity';
import supertest from 'supertest';

describe('[MODULE] | Post', () => {
  it('[E2E] | Should: list [all] => [POST]', async () => {
    const response = await supertest(app).get(post.prefix);
    const body: { posts: Post[] } = response.body;

    expect(response.status).toBe(200);

    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts.length).toBeGreaterThanOrEqual(0);
  });
});
