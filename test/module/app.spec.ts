import { AppModule, MODULE } from '@modules';
import { Express } from 'express';

describe('[MODULE] | AppModule', () => {
  it('Should be able to bind module [APP]', () => {
    const app = AppModule.get<Express>(MODULE.APP);

    expect(app).toBeDefined();
    expect(app).toHaveProperty('post');
  });
});
