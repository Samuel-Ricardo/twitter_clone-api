import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';

jest.mock('@prisma/client');

const PrismaMock = PrismaClient as jest.Mock<PrismaClient>;

const mockPrisma = () => new PrismaMock() as jest.Mocked<PrismaClient>;

export const PrismaMockResgistry = {
  PRISMA: Symbol.for('Prisma'),
};

export const PrismaMockModule = new Container({ autoBindInjectable: true });

PrismaMockModule.bind(PrismaMockResgistry.PRISMA).toDynamicValue(mockPrisma);

export const PrismaMockFactory = {
  PRISMA: () =>
    PrismaMockModule.get<jest.Mocked<PrismaClient>>(PrismaMockResgistry.PRISMA),
};
