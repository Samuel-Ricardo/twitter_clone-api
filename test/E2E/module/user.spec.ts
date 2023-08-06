/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import supertest from 'supertest';

describe('[MODULE] | User', () => {
  it('[E2E] | Should: Select - [all] => [USER]', async () => {
    const response = await supertest(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body.users).toBeInstanceOf(Array);
    expect(response.body.users.length).toBeGreaterThanOrEqual(0);
  });
});
