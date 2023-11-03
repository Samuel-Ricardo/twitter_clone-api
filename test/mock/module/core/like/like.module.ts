import { Container } from 'inversify';
import { MockLikeRegistry } from './like.registry';
import {
  mockCreateLikeUseCase,
  mockDeleteLikeUseCase,
  mockGetLikeOfPostUseCase,
  mockGetLikeOfUserUseCase,
  mockGetLikesOfCommentUseCase,
} from './use-case';
import { mockLikeService, simulateLikeService } from './service/like.service';
import { mockLikeController, simulateLikeController } from './controller';
import { mockEmitCreateLikeEventUseCase } from './use-case/events/create.use-case';
import { mockEncryptLikeBeforeSendPolicy } from './policy/security/encrypt/before/like.policy';
import { mockEncryptLikeListBeforeSendPolicy } from './policy/security/encrypt/before/likes.policy';

export const MockLikeModule = new Container({ autoBindInjectable: true });

MockLikeModule.bind(MockLikeRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateLikeUseCase,
);
MockLikeModule.bind(MockLikeRegistry.USE_CASE.DELETE).toDynamicValue(
  mockDeleteLikeUseCase,
);
MockLikeModule.bind(MockLikeRegistry.USE_CASE.GET.BY.POST).toDynamicValue(
  mockGetLikeOfPostUseCase,
);
MockLikeModule.bind(MockLikeRegistry.USE_CASE.GET.BY.USER).toDynamicValue(
  mockGetLikeOfUserUseCase,
);
MockLikeModule.bind(MockLikeRegistry.USE_CASE.GET.BY.COMMENT).toDynamicValue(
  mockGetLikesOfCommentUseCase,
);
MockLikeModule.bind(MockLikeRegistry.USE_CASE.EVENTS.CREATE).toDynamicValue(
  mockEmitCreateLikeEventUseCase,
);

MockLikeModule.bind(
  MockLikeRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.LIKE,
).toDynamicValue(mockEncryptLikeBeforeSendPolicy);

MockLikeModule.bind(
  MockLikeRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.LIKES,
).toDynamicValue(mockEncryptLikeListBeforeSendPolicy);

MockLikeModule.bind(MockLikeRegistry.SERVICE).toDynamicValue(mockLikeService);
MockLikeModule.bind(MockLikeRegistry.SERVICE_DEV).toDynamicValue(
  simulateLikeService,
);

MockLikeModule.bind(MockLikeRegistry.CONTROLLER).toDynamicValue(
  mockLikeController,
);
MockLikeModule.bind(MockLikeRegistry.CONTROLLER_DEV).toDynamicValue(
  simulateLikeController,
);
