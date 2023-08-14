import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  GetCommentLikesUseCase,
  GetPostLikesUseCase,
  GetUserLikesUseCase,
} from '../../../../../src/modules/@core/like';
import { MockLikeModule } from './like.module';
import { MockLikeRegistry } from './like.registry';

export const MockLikeFactory = {
  USE_CASE: {
    CREATE: () =>
      MockLikeModule.get<CreateLikeUseCase>(MockLikeRegistry.USE_CASE.CREATE),
    DELETE: () =>
      MockLikeModule.get<DeleteLikeUseCase>(MockLikeRegistry.USE_CASE.DELETE),
    GET: {
      BY: {
        POST: () =>
          MockLikeModule.get<GetPostLikesUseCase>(
            MockLikeRegistry.USE_CASE.GET.BY.POST,
          ),
        USER: () =>
          MockLikeModule.get<GetUserLikesUseCase>(
            MockLikeRegistry.USE_CASE.GET.BY.USER,
          ),
        COMMENT: () =>
          MockLikeModule.get<GetCommentLikesUseCase>(
            MockLikeRegistry.USE_CASE.GET.BY.COMMENT,
          ),
      },
    },
  },
};
