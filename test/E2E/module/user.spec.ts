/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { User } from '@User';
import { CREATE_USER_DATA } from '@test/mock';
import supertest from 'supertest';

describe('[MODULE] | User', () => {
  jest.setTimeout(30000);

  it('[E2E] | Should: Create => [USER]', async () => {
    const response = await supertest(app).post('/users').send(CREATE_USER_DATA);
    const body: { user: User } = response.body;

    expect(response.status).toBe(201);
    expect(body.user).toHaveProperty('id');
    expect(body.user.username).toBe(CREATE_USER_DATA.username);
    expect(body.user.email).toBe(CREATE_USER_DATA.email);
    expect(body.user.bio).toBeNull();
  });

  it('[E2E] | Should: Select - [all] => [USER]', async () => {
    const response = await supertest(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body.users).toBeInstanceOf(Array);
    expect(response.body.users.length).toBeGreaterThanOrEqual(0);
  });
});
