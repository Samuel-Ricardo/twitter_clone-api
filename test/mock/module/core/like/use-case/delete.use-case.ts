import { DeleteLikeUseCase } from '@Core/like';
import { mockDeep } from 'jest-mock-extended';

export const mockDeleteLikeUseCase = () => mockDeep<DeleteLikeUseCase>();
