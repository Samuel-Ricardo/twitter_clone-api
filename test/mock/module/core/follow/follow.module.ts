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
import { mockFollowService, simulateFollowService } from './service';
import { mockFollowController, simulateFollowController } from './controller';

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
FollowMockModule.bind(FollowMockRegistry.SERVICE).toDynamicValue(
  mockFollowService,
);
FollowMockModule.bind(FollowMockRegistry.SERVICE_DEV).toDynamicValue(
  simulateFollowService,
);

FollowMockModule.bind(FollowMockRegistry.CONTROLLER).toDynamicValue(
  mockFollowController,
);
FollowMockModule.bind(FollowMockRegistry.CONTROLLER_DEV).toDynamicValue(
  simulateFollowController,
);
