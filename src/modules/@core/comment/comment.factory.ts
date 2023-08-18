import { CommentModule } from './comment.module';
import { CommentRegistry } from './comment.registry';
import { CommentService } from './service/comment.service';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from './use-case';

export const CommentFactory = {
  SERVICE: () => CommentModule.get<CommentService>(CommentRegistry.SERVICE),
  USE_CASE: {
    CREATE: () =>
      CommentModule.get<CreateCommentUseCase>(CommentRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      CommentModule.get<UpdateCommentUseCase>(CommentRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      CommentModule.get<DeleteCommentUseCase>(CommentRegistry.USE_CASE.DELETE),
    GET: {
      BY: {
        POST: () =>
          CommentModule.get<GetPostCommentUseCase>(
            CommentRegistry.USE_CASE.GET.BY.POST,
          ),
        AUTHOR: () =>
          CommentModule.get<GetUserCommnetsUseCase>(
            CommentRegistry.USE_CASE.GET.BY.AUTHOR,
          ),
      },
    },
  },
};
