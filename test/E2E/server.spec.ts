import { app } from '@/app';
import supertest from 'supertest';

describe('[API] | health check', () => {
  it('should be healthy', async () => {
    const response = await supertest(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: 'Hello World! :D' });
  });
});
