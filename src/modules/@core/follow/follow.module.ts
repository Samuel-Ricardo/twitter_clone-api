import { Container } from 'inversify';
import { FollowRegistry } from './follow.registry';
import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from './use-case';

export const FollowModule = new Container({ autoBindInjectable: true });

FollowModule.bind(FollowRegistry.USE_CASE.CREATE).to(CreateFollowUseCase);
FollowModule.bind(FollowRegistry.USE_CASE.DELETE).to(UnFollowUseCase);
FollowModule.bind(FollowRegistry.USE_CASE.COUNT.FOLLOWERS).to(
  CountFollowersUseCase,
);
FollowModule.bind(FollowRegistry.USE_CASE.COUNT.FOLLOWINGS).to(
  CountFollowingsUseCase,
);
FollowModule.bind(FollowRegistry.USE_CASE.GET.FOLLOWERS).to(
  GetFollowersUseCase,
);
FollowModule.bind(FollowRegistry.USE_CASE.GET.FOLLOWINGS).to(
  GetFollowingsUseCase,
);
