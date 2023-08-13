import { GetUserLikesUseCase } from '../../../../../../src/modules/@core/like';
import { mockDeep } from 'jest-mock-extended';

export const mockGetLikeOfUserUseCase = () => mockDeep<GetUserLikesUseCase>();
