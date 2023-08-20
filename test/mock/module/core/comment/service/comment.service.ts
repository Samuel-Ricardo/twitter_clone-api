import { mockDeep } from 'jest-mock-extended';
import { CommentService } from '../../../../../../src/modules/@core/comment/service/comment.service';

export const mockCommentService = () => mockDeep<CommentService>();
