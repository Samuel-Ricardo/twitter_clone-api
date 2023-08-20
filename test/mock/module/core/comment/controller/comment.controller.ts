import { mockDeep } from 'jest-mock-extended';
import { CommentController } from '../../../../../../src/modules/@core/comment/controller/comment.controller';

export const mockCommentController = () => mockDeep<CommentController>();
