import { FollowModule } from './follow.module';
import { FollowRegistry } from './follow.registry';
import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from './use-case';

export const FollowFactory = {
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
