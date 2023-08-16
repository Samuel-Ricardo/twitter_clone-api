import { Container } from 'inversify';
import { FollowMockRegistry } from './follow.registry';
import {
  mockCountFollowersUseCase,
  mockCountFollowingUseCase,
  mockCreateFollowUseCase,
  mockGetFollowersUseCase,
  mockGetFollowingUseCase,
  mockUnFollowUseCase,
} from './use-case';

export const FollowMockModule = new Container({ autoBindInjectable: true });

FollowMockModule.bind(FollowMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateFollowUseCase,
);
FollowMockModule.bind(FollowMockRegistry.USE_CASE.DELETE).toDynamicValue(
  mockUnFollowUseCase,
);
FollowMockModule.bind(
  FollowMockRegistry.USE_CASE.COUNT.FOLLOWERS,
).toDynamicValue(mockCountFollowersUseCase);
FollowMockModule.bind(
  FollowMockRegistry.USE_CASE.COUNT.FOLLOWING,
).toDynamicValue(mockCountFollowingUseCase);
FollowMockModule.bind(FollowMockRegistry.USE_CASE.GET.FOLLOWERS).toDynamicValue(
  mockGetFollowersUseCase,
);
FollowMockModule.bind(FollowMockRegistry.USE_CASE.GET.FOLLOWING).toDynamicValue(
  mockGetFollowingUseCase,
);
