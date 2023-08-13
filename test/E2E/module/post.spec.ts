/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { post } from '../../../src/modules/router/post/post.router';
import { Post } from '../../../src/modules/@core/post/entity/post.entity';
import supertest from 'supertest';
import {
  CREATE_POST_DATA,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_USER,
} from '@test/mock/data/post';
import { response } from 'express';
import { IUpdatePostDTO } from '@Post';

describe('[MODULE] | Post', () => {
  let posted: any;

  it('[E2E] | Should: Create => [POST]', async () => {
    const response = await supertest(app)
      .post(post.prefix)
      .send(CREATE_POST_DATA);
    const body: { post: any } = response.body;

    expect(response.status).toBe(201);
    expect(body.post).toHaveProperty('id');
    expect(body.post.authorId).toBe(CREATE_POST_DATA.authorId);
    expect(body.post.body).toBe(CREATE_POST_DATA.body);

    posted = body.post;
  });

  it('[E2E] | Should: list [all] => [POST]', async () => {
    const response = await supertest(app).get(post.prefix);
    const body: { posts: Post[] } = response.body;

    expect(response.status).toBe(200);

    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts).toHaveLength(1);
  });

  it('[E2E] | Should: create and list [by author] => [POST]', async () => {
    const response = await supertest(app).get(
      post.prefix + '/author/' + VALID_USER.id,
    );
    const body: { posts: any[] } = response.body;

    expect(response.status).toBe(200);
    expect(body.posts).toBeInstanceOf(Array);
    expect(body.posts.length).toBeGreaterThanOrEqual(1);
    expect(body.posts[0].authorId).toBe(VALID_POST.authorId);
    expect(body.posts[0].authorId).toBe(VALID_USER.id);
  });

  it('[E2E] | Should: detail => [POST]', async () => {
    const response = await supertest(app).get(post.prefix + '/' + posted.id);
    const body: { post: any } = response.body;

    expect(response.status).toBe(200);
    expect(body.post).toHaveProperty('id');
    expect(body.post.id).toBe(posted.id);
  });

  it('[E2E] | Should: update => [POST]', async () => {
    const UPDATE_DATA: IUpdatePostDTO = {
      id: posted.id,
      body: 'Rapazzzzzzz',
    };

    const response = await supertest(app).patch(post.prefix).send(UPDATE_DATA);
    const body: { post: any } = response.body;

    expect(response.status).toBe(201);
    expect(body.post).toBeDefined();

    expect(body.post.id).toEqual(posted.id);
    expect(body.post.body).not.toEqual(posted.body);
  });

  it('[E2E] | Should: delete => [POST]', async () => {
    const response = await supertest(app).delete(post.prefix + '/' + posted.id);

    expect(response.status).toBe(204);

    const findResponse = await supertest(app).get(
      post.prefix + '/' + posted.id,
    );

    expect(findResponse.status).toBe(404);
  });
});
