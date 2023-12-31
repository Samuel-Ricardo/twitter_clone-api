import { CommentModule } from './comment.module';
import { CommentRegistry } from './comment.registry';
import { CommentController } from './controller';
import { EncryptCommentBeforeSendPolicy } from './policy/security/encrypt/before/comment.policy';
import { EncryptCommentListBeforeSendPolicy } from './policy/security/encrypt/before/comments.policy';
import { CommentService } from './service/comment.service';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from './use-case';
import { GetCommentByIdUseCase } from './use-case/get_by_id.use-case';

export const CommentFactory = {
  DEFAULT: () =>
    CommentModule.get<CommentController>(CommentRegistry.CONTROLLER),
  SERVICE: () => CommentModule.get<CommentService>(CommentRegistry.SERVICE),
  CONTROLLER: () =>
    CommentModule.get<CommentController>(CommentRegistry.CONTROLLER),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          COMMENT: () =>
            CommentModule.get<EncryptCommentBeforeSendPolicy>(
              CommentRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENT,
            ),
          COMMENTS: () =>
            CommentModule.get<EncryptCommentListBeforeSendPolicy>(
              CommentRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENTS,
            ),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: () =>
      CommentModule.get<CreateCommentUseCase>(CommentRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      CommentModule.get<UpdateCommentUseCase>(CommentRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      CommentModule.get<DeleteCommentUseCase>(CommentRegistry.USE_CASE.DELETE),
    GET: {
      BY: {
        ID: () =>
          CommentModule.get<GetCommentByIdUseCase>(
            CommentRegistry.USE_CASE.GET.BY.ID,
          ),
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
