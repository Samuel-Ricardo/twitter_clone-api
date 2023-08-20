import { CreateCommentUseCase } from '../../../../../../src/modules/@core/comment/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCreateCommentUseCase = () => mockDeep<CreateCommentUseCase>();
