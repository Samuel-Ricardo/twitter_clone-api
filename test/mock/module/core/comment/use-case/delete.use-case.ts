import { mockDeep } from 'jest-mock-extended';
import { DeleteCommentUseCase } from '../../../../../../src/modules/@core/comment/use-case';

export const mockDeleteCommentUseCase = () => mockDeep<DeleteCommentUseCase>();
