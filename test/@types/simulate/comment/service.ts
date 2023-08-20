import {
  CreateCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  DeleteCommentUseCase,
  UpdateCommentUseCase,
} from '../../../../src/modules/@core/comment/use-case';
import { FollowService } from '../../../../src/modules/@core/follow/service';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateCommentService {
  service: FollowService;
  use_case: {
    create: DeepMockProxy<CreateCommentUseCase>;
    update: DeepMockProxy<UpdateCommentUseCase>;
    deleteComment: DeepMockProxy<DeleteCommentUseCase>;
    get_post_comments: DeepMockProxy<GetPostCommentUseCase>;
    get_user_comments: DeepMockProxy<GetUserCommnetsUseCase>;
  };
}
