/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { like } from '../../../src/modules/router/like';
import { CREATE_POST_LIKE_DATA } from '@test/mock/data/like';
import supertest from 'supertest';

describe('[MODULE] | LIKE', () => {
  let liked;

  it('[E2E] | Should: create => [Like]', async () => {
    const response = await supertest(app)
      .post(like.prefix)
      .send(CREATE_POST_LIKE_DATA);
    const body = await response.body;

    expect(response.status).toBe(201);
    expect(body.like).toBeDefined();
    expect(body.like).toHaveProperty('id');
    expect(body.like.userId).toEqual(CREATE_POST_LIKE_DATA.userId);
    expect(body.like.likedId).toEqual(CREATE_POST_LIKE_DATA.likedId);

    liked = body.like;
  });
});
