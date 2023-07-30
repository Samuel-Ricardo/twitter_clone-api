import { randomUUID } from 'crypto';
import { PrismaMockModule, PrismaMockResgistry } from './prisma-mock.module';
import { PrismaClient } from '@prisma/client';
import { ENV } from '@test/env';

const url = ENV.DB.URL.replace('[hash]', 'test_' + randomUUID());

console.log({ url });

export const prisma_dev = new PrismaClient({
  datasources: { db: { url } },
});

export const PrismaDevFactory = {
  PRISMA_DEV: () => prisma_dev,
};
