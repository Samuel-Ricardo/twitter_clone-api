import { PrismaPostRepository } from '@modules/repository/prisma/post';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaPostRepository = () => mockDeep<PrismaPostRepository>();
