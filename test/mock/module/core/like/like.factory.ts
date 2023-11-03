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
import { EmitCreateLikeEventUseCase } from '@Like/use-case/events/create.use-case';
import { EncryptLikeBeforeSendPolicy } from '@Like/policy/security/encrypt/before/like.policy';
import { EncryptLikeListBeforeSendPolicy } from '@Like/policy/security/encrypt/before/likes.policy';

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
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          LIKE: () =>
            MockLikeModule.get<DeepMockProxy<EncryptLikeBeforeSendPolicy>>(
              MockLikeRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.LIKE,
            ),
          LIKES: () =>
            MockLikeModule.get<DeepMockProxy<EncryptLikeListBeforeSendPolicy>>(
              MockLikeRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.LIKES,
            ),
        },
      },
    },
  },
  USE_CASE: {
    EVENTS: {
      CREATE: () =>
        MockLikeModule.get<DeepMockProxy<EmitCreateLikeEventUseCase>>(
          MockLikeRegistry.USE_CASE.EVENTS.CREATE,
        ),
    },
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
