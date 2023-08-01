import { PrismaMockResgistry } from './prisma';
import { PrismaRepositoryMockRegistry as PRISMA } from './repository';

export const MOCK_MODULE = {
  ...PrismaMockResgistry,
  PRISMA,
};
