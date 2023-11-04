import { FollowController } from './controller';
import { FollowModule } from './follow.module';
import { FollowRegistry } from './follow.registry';
import { EncryptFollowBeforeSendPolicy } from './policy/security/encrypt/before/follow.policy';
import { EncryptFollowListBeforeSendPolicy } from './policy/security/encrypt/before/followers.policy';
import { FollowService } from './service';
import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from './use-case';

export const FollowFactory = {
  DEFAULT: () => FollowModule.get<FollowController>(FollowRegistry.CONTROLLER),
  SERVICE: () => FollowModule.get<FollowService>(FollowRegistry.SERVICE),
  CONTROLLER: () =>
    FollowModule.get<FollowController>(FollowRegistry.CONTROLLER),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          FOLLOW: () =>
            FollowModule.get<EncryptFollowBeforeSendPolicy>(
              FollowRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOW,
            ),
          FOLLOWERS: () =>
            FollowModule.get<EncryptFollowListBeforeSendPolicy>(
              FollowRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOWERS,
            ),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: () =>
      FollowModule.get<CreateFollowUseCase>(FollowRegistry.USE_CASE.CREATE),
    DELETE: () =>
      FollowModule.get<UnFollowUseCase>(FollowRegistry.USE_CASE.DELETE),
    COUNT: {
      FOLLOWERS: () =>
        FollowModule.get<CountFollowersUseCase>(
          FollowRegistry.USE_CASE.COUNT.FOLLOWERS,
        ),
      FOLLOWINGS: () =>
        FollowModule.get<CountFollowingsUseCase>(
          FollowRegistry.USE_CASE.COUNT.FOLLOWINGS,
        ),
    },
    GET: {
      FOLLOWERS: () =>
        FollowModule.get<GetFollowersUseCase>(
          FollowRegistry.USE_CASE.GET.FOLLOWERS,
        ),
      FOLLOWINGS: () =>
        FollowModule.get<GetFollowingsUseCase>(
          FollowRegistry.USE_CASE.GET.FOLLOWINGS,
        ),
    },
  },
};
