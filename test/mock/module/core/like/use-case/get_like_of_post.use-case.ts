import { GetPostLikesUseCase } from '@Core/like';
import { mockDeep } from 'jest-mock-extended';

export const mockGetLikeOfPostUseCase = () => mockDeep<GetPostLikesUseCase>();
