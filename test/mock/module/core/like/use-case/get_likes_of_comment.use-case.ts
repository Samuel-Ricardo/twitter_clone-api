import { GetCommentLikesUseCase } from '../../../../../../src/modules/@core/like';
import { mockDeep } from 'jest-mock-extended';

export const mockGetLikesOfCommentUseCase = () =>
  mockDeep<GetCommentLikesUseCase>();
