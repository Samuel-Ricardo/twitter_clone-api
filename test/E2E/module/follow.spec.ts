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

  it('[E2E] | Should: be able to [COUNT] => [FOLLOWING]', async () => {
    const resonse = await supertest(app).get(
      `${follow.prefix}/count/following/${follow_relation.followerId}`,
    );

    expect(resonse.status).toBe(200);

    const body: { following: number } = resonse.body;

    expect(body).toHaveProperty('following');
    expect(body.following).toBeGreaterThanOrEqual(0);
  });

  it('[E2E] | Should: be able to [GET] => [FOLLOWERS]', async () => {
    const resonse = await supertest(app).get(
      `${follow.prefix}/${follow_relation.followingId}/followers`,
    );

    expect(resonse.status).toBe(200);

    const body: { followers: IFollowDTO[] } = resonse.body;

    expect(body).toHaveProperty('followers');
    expect(body.followers.length).toBeGreaterThanOrEqual(0);
    expect(body.followers[0]).toHaveProperty('id');
    expect(body.followers[0]).toStrictEqual(follow_relation);
  });

  it('[E2E] | Should: be able to [GET] => [FOLLOWING]', async () => {
    const response = await supertest(app).get(
      `${follow.prefix}/${follow_relation.followerId}/following`,
    );

    expect(response.status).toBe(200);

    const body = response.body;

    expect(body).toHaveProperty('following');
    expect(body.following.length).toBeGreaterThanOrEqual(0);
    expect(body.following[0]).toHaveProperty('id');
    expect(body.following[0]).toStrictEqual(follow_relation);
  });

  it('[E2E] | Should: be able to => [UNFOLLOW]', async () => {
    const resonse = await supertest(app).delete(
      `${follow.prefix}/${follow_relation.id}`,
    );
    expect(resonse.status).toBe(204);
    expect(resonse.body).toEqual({});
  });
});
