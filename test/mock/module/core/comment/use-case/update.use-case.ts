import { mockDeep } from 'jest-mock-extended';
import { UpdateCommentUseCase } from '../../../../../../src/modules/@core/comment/use-case';

export const mockUpdateCommentUseCase = () => mockDeep<UpdateCommentUseCase>();
