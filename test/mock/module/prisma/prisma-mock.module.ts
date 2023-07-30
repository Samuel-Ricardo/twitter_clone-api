import { ENV } from '@test/env';
import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { randomUUID } from 'crypto';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

let PrismaMock: DeepMockProxy<PrismaClient>;
const mockPrisma = () => {
  PrismaMock = mockDeep<PrismaClient>();
  return PrismaMock;
};

export const PrismaMockResgistry = {
  PRISMA: Symbol.for('Prisma'),
  PRISMA_DEV: Symbol.for('PrismaDev'),
};

export const PrismaMockModule = new Container({ autoBindInjectable: true });

PrismaMockModule.bind(PrismaMockResgistry.PRISMA).toDynamicValue(mockPrisma);

export const PrismaMockFactory = {
  PRISMA: () =>
    PrismaMockModule.get<DeepMockProxy<PrismaClient>>(
      PrismaMockResgistry.PRISMA,
    ),
};
