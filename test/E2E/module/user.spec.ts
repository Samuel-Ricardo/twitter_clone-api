/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { User } from '@User';
import { IUserDTO } from '@User/DTO/user.dto';
import { IUserCypher } from '@User/cypher/user.cypher';
import { MODULES } from '@modules';
import { CREATE_USER_DATA } from '@test/mock';
import supertest from 'supertest';

describe('[MODULE] | User', () => {
  let user: IUserDTO;
  let cypher: IUserCypher;

  beforeAll(() => (cypher = MODULES.CYPHER.USER()));

  beforeEach(async () => {
    if (user) {
      user = cypher.decryptUser(
        (await supertest(app).get(`/users/${user.id}`)).body.user,
      );
    }
  });

  it('[E2E] | Should: Create => [USER]', async () => {
    const response = await supertest(app).post('/users').send(CREATE_USER_DATA);
    const body: { user: string } = response.body;

    const result: IUserDTO = await cypher.decryptUser(body.user);

    expect(response.status).toBe(201);
    expect(body.user.length).toBeGreaterThanOrEqual(1);
    expect(result).toHaveProperty('id');
    expect(result.username).toBe(CREATE_USER_DATA.username);
    expect(result.email).toBe(CREATE_USER_DATA.email);
    expect(result.bio).toBeNull();

    user = result;
  });

  it('[E2E] | Should not: Create same => [USER]', async () => {
    const response = await supertest(app).post('/users').send(CREATE_USER_DATA);

    expect(response.status).not.toBe(201);
  });

  it('[E2E] | Should: Select - by [credentials] => [USER]', async () => {
    const response = await supertest(app).post(`/users/by/credentials`).send({
      email: user.email,
      password: user.password,
    });
    const body: { user: string } = response.body;

    const result = cypher.decryptUser(body.user);

    expect(response.status).toBe(201);

    expect(result).toBeDefined();
    expect(result).toHaveProperty('id');
    expect(result.id).toEqual(result.id);

    expect(result.sessionToken).toBeDefined();

    user = result;
  });

  it('[E2E] | Should: Update => [USER]', async () => {
    const UPDATE_USER_DATA = {
      id: user.id,
      name: 'Tomi!',
    };

    const response = await supertest(app)
      .patch(`/users`)
      .set('Authorization', `Bearer ${user.sessionToken}`)
      .send(UPDATE_USER_DATA);
    const body: { user: string } = response.body;

    const result = cypher.decryptUser(body.user);

    expect(response.status).toBe(201);

    expect(result).toHaveProperty('id');
    expect(result.id).toBe(user.id);
  });

  it('[E2E] | Should: Select - [all] => [USER]', async () => {
    const response = await supertest(app).get('/users');
    const users: IUserDTO[] = cypher.decryptUsers(response.body.users);

    expect(response.status).toBe(200);
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThanOrEqual(0);
    expect(users).toContainEqual(user);
  });

  it('[E2E] | Should: Select - [by id] => [USER]', async () => {
    const response = await supertest(app).get(`/users/${user.id}`);
    const result = cypher.decryptUser(response.body.user);

    expect(response.status).toBe(200);
    expect(result).toHaveProperty('id');
    expect(result.id).toEqual(user.id);
    expect(result).toStrictEqual(user);
  });

  it('[E2E] | Should: Select - [by email] => [USER]', async () => {
    const response = await supertest(app).get(`/users/email/${user.email}`);

    expect(response.status).toBe(200);

    const result = cypher.decryptUser(response.body.user);

    expect(result).toHaveProperty('id');
    expect(result.id).toEqual(user.id);
    expect(result).toStrictEqual(user);
  });

  it('[E2E] | Should: Delete - by [id] => [USER]', async () => {
    const response = await supertest(app)
      .delete(`/users/${user.id}`)
      .set('Authorization', `Bearer ${user.sessionToken}`);
    expect(response.status).toBe(200);
  });
});
