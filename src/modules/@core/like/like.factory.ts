import { LikeController } from './controller/like.controller';
import { LikeModule } from './like.module';
import { LikeRegistry } from './like.registry';
import { LikeService } from './service/like.service';
import { CreateLikeUseCase } from './use-case/create.use-case';
import { DeleteLikeUseCase } from './use-case/delete.use-case';
import { GetCommentLikesUseCase } from './use-case/get_comment_likes.use-case';
import { GetPostLikesUseCase } from './use-case/get_post_likes.use-case';
import { GetUserLikesUseCase } from './use-case/get_user_likes.use-case';

export const LikeFactory = {
  DEFAULT: () =>
    LikeModule.get<LikeController>(LikeRegistry.CONTROLLER.DEFAULT),
  CONTROLLER: {
    DEFAULT: () =>
      LikeModule.get<LikeController>(LikeRegistry.CONTROLLER.DEFAULT),
  },
  SERVICE: {
    DEFAULT: () => LikeModule.get<LikeService>(LikeRegistry.SERVICE.DEFAULT),
  },
  USE_CASE: {
    CREATE: () =>
      LikeModule.get<CreateLikeUseCase>(LikeRegistry.USE_CASE.CREATE),
    DELETE: () =>
      LikeModule.get<DeleteLikeUseCase>(LikeRegistry.USE_CASE.DELETE),
    GET: {
      BY: {
        POST: () =>
          LikeModule.get<GetPostLikesUseCase>(
            LikeRegistry.USE_CASE.GET.BY.POST,
          ),
        USER: () =>
          LikeModule.get<GetUserLikesUseCase>(
            LikeRegistry.USE_CASE.GET.BY.USER,
          ),
        COMMENT: () =>
          LikeModule.get<GetCommentLikesUseCase>(
            LikeRegistry.USE_CASE.GET.BY.COMMENT,
          ),
      },
    },
  },
};
