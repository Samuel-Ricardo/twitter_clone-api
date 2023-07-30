import { PrismaClient } from '@prisma/client';
import { PrismaMockModule, PrismaMockResgistry } from './prisma-mock.module';

const prisma = new PrismaClient();

PrismaMockModule.bind(PrismaMockResgistry.PRISMA_DEV).toConstantValue(prisma);

export const PrismaDevFactory = {
  PRISMA_DEV: () =>
    PrismaMockModule.get<PrismaClient>(PrismaMockResgistry.PRISMA_DEV),
};
