import { PrismaLikeRepository } from '@modules/repository/prisma/like';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaLikeRepository = () => mockDeep<PrismaLikeRepository>();
