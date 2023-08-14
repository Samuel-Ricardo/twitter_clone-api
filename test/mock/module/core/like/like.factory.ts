import { DeepMockProxy } from 'jest-mock-extended';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  GetCommentLikesUseCase,
  GetPostLikesUseCase,
  GetUserLikesUseCase,
  LikeController,
  LikeService,
} from '../../../../../src/modules/@core/like';
import { MockLikeModule } from './like.module';
import { MockLikeRegistry } from './like.registry';
import { ISimulateLikeService } from '@test/@types/simulate/like';
import { ISimulateLikeController } from '@test/@types/simulate/like/controller';

export const MockLikeFactory = {
  SERVICE: () =>
    MockLikeModule.get<DeepMockProxy<LikeService>>(MockLikeRegistry.SERVICE),
  SERVICE_DEV: () =>
    MockLikeModule.get<ISimulateLikeService>(MockLikeRegistry.SERVICE_DEV),
  CONTROLLER: () =>
    MockLikeModule.get<DeepMockProxy<LikeController>>(
      MockLikeRegistry.CONTROLLER,
    ),
  CONTROLLER_DEV: () =>
    MockLikeModule.get<ISimulateLikeController>(
      MockLikeRegistry.CONTROLLER_DEV,
    ),
  USE_CASE: {
    CREATE: () =>
      MockLikeModule.get<DeepMockProxy<CreateLikeUseCase>>(
        MockLikeRegistry.USE_CASE.CREATE,
      ),
    DELETE: () =>
      MockLikeModule.get<DeepMockProxy<DeleteLikeUseCase>>(
        MockLikeRegistry.USE_CASE.DELETE,
      ),
    GET: {
      BY: {
        POST: () =>
          MockLikeModule.get<DeepMockProxy<GetPostLikesUseCase>>(
            MockLikeRegistry.USE_CASE.GET.BY.POST,
          ),
        USER: () =>
          MockLikeModule.get<DeepMockProxy<GetUserLikesUseCase>>(
            MockLikeRegistry.USE_CASE.GET.BY.USER,
          ),
        COMMENT: () =>
          MockLikeModule.get<DeepMockProxy<GetCommentLikesUseCase>>(
            MockLikeRegistry.USE_CASE.GET.BY.COMMENT,
          ),
      },
    },
  },
};
