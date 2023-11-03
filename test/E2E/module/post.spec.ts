/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { post } from '../../../src/modules/router/post/post.router';
import { Post } from '../../../src/modules/@core/post/entity/post.entity';
import supertest from 'supertest';
import { CREATE_POST_DATA, VALID_POST, VALID_USER } from '@test/mock/data/post';
import { IPostDTO, IUpdatePostDTO } from '@Post';
import { IPostCypher } from '@Post/cypher/post.cypher';
import { MODULES } from '@modules';

describe('[MODULE] | Post', () => {
  let posted: any;
  let cypher: IPostCypher;

  beforeAll(() => (cypher = MODULES.CYPHER.POST()));

  it('[E2E] | Should: Create => [POST]', async () => {
    const response = await supertest(app)
      .post(post.prefix)
      .send(CREATE_POST_DATA);

    const result = await cypher.decryptPost(response.body.post);

    expect(response.status).toBe(201);
    expect(result).toHaveProperty('id');
    expect(result.authorId).toBe(CREATE_POST_DATA.authorId);
    expect(result.body).toBe(CREATE_POST_DATA.body);

    posted = result;
  });

  it('[E2E] | Should: list [all] => [POST]', async () => {
    const response = await supertest(app).get(post.prefix);
    const result = cypher.decryptPosts(response.body.posts);

    expect(response.status).toBe(200);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1);
    expect(result).toContainEqual(posted);
  });

  it('[E2E] | Should: create and list [by author] => [POST]', async () => {
    const response = await supertest(app).get(
      post.prefix + '/author/' + VALID_USER.id,
    );
    const result = cypher.decryptPosts(response.body.posts);

    expect(response.status).toBe(200);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result[0].authorId).toBe(VALID_POST.authorId);
    expect(result[0].authorId).toBe(VALID_USER.id);
  });

  it('[E2E] | Should: detail => [POST]', async () => {
    const response = await supertest(app).get(post.prefix + '/' + posted.id);
    const result = cypher.decryptPost(response.body.post);

    expect(response.status).toBe(200);
    expect(result).toHaveProperty('id');
    expect(result.id).toBe(posted.id);
  });

  it('[E2E] | Should: update => [POST]', async () => {
    const UPDATE_DATA: IUpdatePostDTO = {
      id: posted.id,
      body: 'Rapazzzzzzz',
    };

    const response = await supertest(app).patch(post.prefix).send(UPDATE_DATA);
    const body: { post: IPostDTO } = {
      post: cypher.decryptPost(response.body.post),
    };

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
