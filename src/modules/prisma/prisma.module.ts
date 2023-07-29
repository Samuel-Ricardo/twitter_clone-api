import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';

export const PrismaRegistry = {
  Prisma: Symbol.for('Prisma'),
};

export const PrismaModule = new Container({ autoBindInjectable: true });

PrismaModule.bind<PrismaClient>(PrismaRegistry.Prisma).toConstantValue(
  new PrismaClient(),
);
