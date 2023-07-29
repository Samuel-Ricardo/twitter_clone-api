import { ENV } from '@test/env';
import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { randomUUID } from 'crypto';

jest.mock('@prisma/client');

const PrismaMock = PrismaClient as jest.Mock<PrismaClient>;
const mockPrisma = () => new PrismaMock() as jest.Mocked<PrismaClient>;

const url = ENV.DB.URL.replace('[hash]', randomUUID());

console.log({ url });

export const PrismaMockResgistry = {
  PRISMA: Symbol.for('Prisma'),
  PRISMA_DEV: Symbol.for('PrismaDev'),
};

export const PrismaMockModule = new Container({ autoBindInjectable: true });

PrismaMockModule.bind(PrismaMockResgistry.PRISMA).toDynamicValue(mockPrisma);
PrismaMockModule.bind(PrismaMockResgistry.PRISMA_DEV).toConstantValue(
  new PrismaClient({
    datasources: { db: { url } },
  }),
);

export const PrismaMockFactory = {
  PRISMA: () =>
    PrismaMockModule.get<jest.Mocked<PrismaClient>>(PrismaMockResgistry.PRISMA),
  PRISMA_DEV: () =>
    PrismaMockModule.get<PrismaClient>(PrismaMockResgistry.PRISMA_DEV),
};
