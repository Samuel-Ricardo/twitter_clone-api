import { CommentService } from '../../../../src/modules/@core/comment/service';
import {
  CreateCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  DeleteCommentUseCase,
  UpdateCommentUseCase,
} from '../../../../src/modules/@core/comment/use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateCommentService {
  service: CommentService;
  use_case: {
    create: DeepMockProxy<CreateCommentUseCase>;
    update: DeepMockProxy<UpdateCommentUseCase>;
    deleteComment: DeepMockProxy<DeleteCommentUseCase>;
    get_post_comments: DeepMockProxy<GetPostCommentUseCase>;
    get_user_comments: DeepMockProxy<GetUserCommnetsUseCase>;
  };
}
