import { AppModule, MODULE } from '@modules';
import { PrismaClient } from '@prisma/client';
import { Express } from 'express';

describe('[MODULE] | AppModule', () => {
  it('Should be able to bind module [APP]', () => {
    const app = AppModule.get<Express>(MODULE.APP);

    expect(app).toBeDefined();
    expect(app).toHaveProperty('post');
  });

  it('Should be able to bind module [PRISMA]', () => {
    const prisma = AppModule.get<PrismaClient>(MODULE.PRISMA);

    expect(prisma).toBeDefined();
    expect(prisma).toHaveProperty('user');
  });
});
