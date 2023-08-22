import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CommentService } from '../../../../../../src/modules/@core/comment/service/comment.service';
import { interfaces } from 'inversify';
import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from '@Core/comment/use-case';

export const mockCommentService = () => mockDeep<CommentService>();

export const simulateCommentService = ({
  container,
}: interfaces.Context): ISimulateCommentService => {
  const create = container.get<DeepMockProxy<CreateCommentUseCase>>(
    MOCK_MODULE.COMMENT.USE_CASE.CREATE,
  );
  const update = container.get<DeepMockProxy<UpdateCommentUseCase>>(
    MOCK_MODULE.COMMENT.USE_CASE.UPDATE,
  );
  const deleteComment = container.get<DeepMockProxy<DeleteCommentUseCase>>(
    MOCK_MODULE.COMMENT.USE_CASE.DELETE,
  );
  const get_user_comments = container.get<
    DeepMockProxy<GetUserCommnetsUseCase>
  >(MOCK_MODULE.COMMENT.USE_CASE.GET.BY.AUTHOR);
  const get_post_comments = container.get<DeepMockProxy<GetPostCommentUseCase>>(
    MOCK_MODULE.COMMENT.USE_CASE.GET.BY.POST,
  );

  const service = new CommentService(
    create,
    update,
    deleteComment,
    get_post_comments,
    get_user_comments,
  );

  return {
    service,
    use_case: {
      create,
      update,
      deleteComment,
      get_post_comments,
      get_user_comments,
    },
  };
};
