import { PrismaMockResgistry } from './prisma';
import { PrismaRepositoryMockRegistry as REPOSITORY } from './repository';
import { UserMockRegistry as USER } from './core/user';

export const MOCK_MODULE = {
  ...PrismaMockResgistry,
  REPOSITORY,
  USER,
};
