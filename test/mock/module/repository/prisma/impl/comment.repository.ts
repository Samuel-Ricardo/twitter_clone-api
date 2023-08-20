import { PrismaCommentRepository } from '../../../../../../src/modules/repository/prisma/comment';
import { mockDeep } from 'jest-mock-extended';

export const mockPrismaCommentRepository = () =>
  mockDeep<PrismaCommentRepository>();
