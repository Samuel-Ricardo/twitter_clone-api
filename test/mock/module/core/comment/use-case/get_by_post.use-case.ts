import { mockDeep } from 'jest-mock-extended';
import { GetPostCommentUseCase } from '../../../../../../src/modules/@core/comment/use-case';

export const mockGetPostCommentUseCase = () =>
  mockDeep<GetPostCommentUseCase>();
