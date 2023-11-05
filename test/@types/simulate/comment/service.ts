import { EncryptCommentBeforeSendPolicy } from '@Core/comment/policy/security/encrypt/before/comment.policy';
import { CommentService } from '../../../../src/modules/@core/comment/service';
import {
  CreateCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  DeleteCommentUseCase,
  UpdateCommentUseCase,
} from '../../../../src/modules/@core/comment/use-case';
import { DeepMockProxy } from 'jest-mock-extended';
import { EncryptCommentListBeforeSendPolicy } from '@Core/comment/policy/security/encrypt/before/comments.policy';
import { GetCommentByIdUseCase } from '@Core/comment/use-case/get_by_id.use-case';

export interface ISimulateCommentService {
  service: CommentService;
  policy: {
    security: {
      encrypt: {
        before: {
          comment: DeepMockProxy<EncryptCommentBeforeSendPolicy>;
          comments: DeepMockProxy<EncryptCommentListBeforeSendPolicy>;
        };
      };
    };
  };
  use_case: {
    create: DeepMockProxy<CreateCommentUseCase>;
    update: DeepMockProxy<UpdateCommentUseCase>;
    deleteComment: DeepMockProxy<DeleteCommentUseCase>;
    get_post_comments: DeepMockProxy<GetPostCommentUseCase>;
    get_user_comments: DeepMockProxy<GetUserCommnetsUseCase>;
    get_by_id: DeepMockProxy<GetCommentByIdUseCase>;
  };
}
