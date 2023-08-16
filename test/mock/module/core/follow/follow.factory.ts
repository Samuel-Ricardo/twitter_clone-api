import { DeepMockProxy } from 'jest-mock-extended';
import { FollowMockModule } from './follow.module';
import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '@Core';
import { FollowMockRegistry } from './follow.registry';
import { FollowService } from '@Core/follow/service';
import { ISimulateFollowService } from '@test/@types/simulate/follow/service';
import { ISimulateFollowController } from '@test/@types/simulate/follow/controller';
import { FollowController } from '@Core/follow/controller';

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
