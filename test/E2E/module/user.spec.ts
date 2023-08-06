/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { User } from '@User';
import { CREATE_USER_DATA } from '@test/mock';
import supertest from 'supertest';

describe('[MODULE] | User', () => {
  let user: User;

  beforeEach(async () => {
    if (user) user = (await supertest(app).get(`/users/${user.id}`)).body.user;
  });

  it('[E2E] | Should: Create => [USER]', async () => {
    const response = await supertest(app).post('/users').send(CREATE_USER_DATA);
    const body: { user: User } = response.body;

    expect(response.status).toBe(201);
    expect(body.user).toHaveProperty('id');
    expect(body.user.username).toBe(CREATE_USER_DATA.username);
    expect(body.user.email).toBe(CREATE_USER_DATA.email);
    expect(body.user.bio).toBeNull();

    user = body.user;
  });

  it('[E2E] | Should: Update => [USER]', async () => {
    const UPDATE_USER_DATA = {
      id: user.id,
      name: 'Tomi!',
    };

    const response = await supertest(app)
      .patch(`/users`)
      .send(UPDATE_USER_DATA);
    const body: { user: User } = response.body;

    expect(response.status).toBe(201);

    expect(body.user).toHaveProperty('id');
    expect(body.user.id).toBe(user.id);
  });

  it('[E2E] | Should not: Create same => [USER]', async () => {
    const response = await supertest(app).post('/users').send(CREATE_USER_DATA);
    const body: { user: User } = response.body;

    expect(response.status).not.toBe(201);
  });

  it('[E2E] | Should: Select - [all] => [USER]', async () => {
    const response = await supertest(app).get('/users');

    expect(response.status).toBe(302);
    expect(response.body.users).toBeInstanceOf(Array);
    expect(response.body.users.length).toBeGreaterThanOrEqual(0);
    expect(response.body.users).toContainEqual(user);
  });

  it('[E2E] | Should: Select - [by id] => [USER]', async () => {
    const response = await supertest(app).get(`/users/${user.id}`);
    const body: { user: User } = response.body;

    expect(response.status).toBe(302);
    expect(body.user).toHaveProperty('id');
    expect(body.user.id).toEqual(user.id);
    expect(body.user).toStrictEqual(user);
  });

  it('[E2E] | Should: Delete - by [id] => [USER]', async () => {
    const response = await supertest(app).delete(`/users/${user.id}`);
    expect(response.status).toBe(200);
  });

  it('[E2E] | Should not: Delete - wrong [id] => [USER]', async () => {
    const response = await supertest(app).delete(`/users/rapaaaz`);
    expect(response.status).not.toBe(200);
  });

  it('[E2E] | Should: return error when select - wrong [id] => [USER]', async () => {
    const response = await supertest(app).get(`/users/pedro`);
    expect(response.status).not.toBe(302);
  });
});
