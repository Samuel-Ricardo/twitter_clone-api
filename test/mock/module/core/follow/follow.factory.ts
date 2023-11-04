import { DeepMockProxy } from 'jest-mock-extended';
import { FollowMockModule } from './follow.module';
import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '../../../../../src/modules/@core/follow/use-case';
import { FollowMockRegistry } from './follow.registry';
import { FollowService } from '../../../../../src/modules/@core/follow/service';
import { FollowController } from '../../../../../src/modules/@core/follow/controller';
import { ISimulateFollowService } from '@test/@types/simulate/follow/service';
import { ISimulateFollowController } from '@test/@types/simulate/follow/controller';
import { EncryptFollowBeforeSendPolicy } from '@Core/follow/policy/security/encrypt/before/follow.policy';
import { EncryptFollowListBeforeSendPolicy } from '@Core/follow/policy/security/encrypt/before/followers.policy';
import { FollowPolicy } from '@Core/follow/policy/follow.policy';

export const FollowMockFactory = {
  SERVICE: () =>
    FollowMockModule.get<DeepMockProxy<FollowService>>(
      FollowMockRegistry.SERVICE,
    ),
  SERVICE_DEV: () =>
    FollowMockModule.get<ISimulateFollowService>(
      FollowMockRegistry.SERVICE_DEV,
    ),
  CONTROLLER: () =>
    FollowMockModule.get<DeepMockProxy<FollowController>>(
      FollowMockRegistry.CONTROLLER,
    ),
  CONTROLLER_DEV: () =>
    FollowMockModule.get<ISimulateFollowController>(
      FollowMockRegistry.CONTROLLER_DEV,
    ),
  POLICY: {
    FOLLOW: () =>
      FollowMockModule.get<DeepMockProxy<FollowPolicy>>(
        FollowMockRegistry.POLICY.FOLLOW,
      ),
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          FOLLOW: () =>
            FollowMockModule.get<DeepMockProxy<EncryptFollowBeforeSendPolicy>>(
              FollowMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOW,
            ),
          FOLLOWERS: () =>
            FollowMockModule.get<
              DeepMockProxy<EncryptFollowListBeforeSendPolicy>
            >(FollowMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOWERS),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: () =>
      FollowMockModule.get<DeepMockProxy<CreateFollowUseCase>>(
        FollowMockRegistry.USE_CASE.CREATE,
      ),
    DELETE: () =>
      FollowMockModule.get<DeepMockProxy<UnFollowUseCase>>(
        FollowMockRegistry.USE_CASE.DELETE,
      ),
    COUNT: {
      FOLLOWERS: () =>
        FollowMockModule.get<DeepMockProxy<CountFollowersUseCase>>(
          FollowMockRegistry.USE_CASE.COUNT.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FollowMockModule.get<DeepMockProxy<CountFollowingsUseCase>>(
          FollowMockRegistry.USE_CASE.COUNT.FOLLOWING,
        ),
    },
    GET: {
      FOLLOWERS: () =>
        FollowMockModule.get<DeepMockProxy<GetFollowersUseCase>>(
          FollowMockRegistry.USE_CASE.GET.FOLLOWERS,
        ),
      FOLLOWING: () =>
        FollowMockModule.get<DeepMockProxy<GetFollowingsUseCase>>(
          FollowMockRegistry.USE_CASE.GET.FOLLOWING,
        ),
    },
  },
};
