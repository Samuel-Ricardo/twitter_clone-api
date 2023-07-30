import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';

export const PrismaRegistry = {
  PRISMA: Symbol.for('Prisma'),
};

export const PrismaModule = new Container({ autoBindInjectable: true });

PrismaModule.bind<PrismaClient>(PrismaRegistry.PRISMA).toConstantValue(
  new PrismaClient(),
);

export const PrismaFactory = {
  PRISMA: () => PrismaModule.get<PrismaClient>(PrismaRegistry.PRISMA),
};
