import { PrismaMockResgistry } from './prisma';
import { PrismaRepositoryMockRegistry as PRISMA } from './repository';
import { UserMockRegistry as USER } from './core/user';

export const MOCK_MODULE = {
  ...PrismaMockResgistry,
  PRISMA,
  USER,
};
