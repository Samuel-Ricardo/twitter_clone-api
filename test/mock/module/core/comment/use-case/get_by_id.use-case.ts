import { mockDeep } from 'jest-mock-extended';
import { GetCommentByIdUseCase } from '../../../../../../src/modules/@core/comment/use-case/get_by_id.use-case';

export const mockGetCommentByIDUseCase = () =>
  mockDeep<GetCommentByIdUseCase>();
