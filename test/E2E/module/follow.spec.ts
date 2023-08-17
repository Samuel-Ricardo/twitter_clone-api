/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { Follow, IFollowDTO } from '../../../src/modules/@core/follow';
import { follow } from '../../../src/modules/router/follow';
import { CREATE_FOLLOW_DATA } from '@test/mock/data/follow';
import supertest from 'supertest';

describe('[MODULE] | Follow', () => {
  let follow_relation: Follow | IFollowDTO;

  it('[E2E] | Should: be able to => [FOLLOW]', async () => {
    const resonse = await supertest(app)
      .post(follow.prefix)
      .send(CREATE_FOLLOW_DATA);
    const body: { follow: IFollowDTO } = resonse.body;

    expect(resonse.status).toBe(201);
    expect(body).toHaveProperty('follow');
    expect(body.follow).toHaveProperty('id');
    expect(body.follow.followingId).toEqual(CREATE_FOLLOW_DATA.followingId);
    expect(body.follow.followerId).toEqual(CREATE_FOLLOW_DATA.followerId);

    follow_relation = body.follow;
  });

  it('[E2E] | Should: be able to [COUNT] => [FOLLOWERS]', async () => {
    const resonse = await supertest(app).get(
      `${follow.prefix}/count/followers/${follow_relation.followingId}`,
    );

    expect(resonse.status).toBe(200);

    const body: { followers: number } = resonse.body;

    expect(body).toHaveProperty('followers');
    expect(body.followers).toBeGreaterThanOrEqual(0);
  });

  it('[E2E] | Should: be able to => [UNFOLLOW]', async () => {
    const resonse = await supertest(app).delete(
      `${follow.prefix}/${follow_relation.id}`,
    );
    expect(resonse.status).toBe(204);
    expect(resonse.body).toEqual({});
  });
});
