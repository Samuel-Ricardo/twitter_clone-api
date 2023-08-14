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

MockLikeModule.bind(MockLikeRegistry.SERVICE).toDynamicValue(mockLikeService);
MockLikeModule.bind(MockLikeRegistry.SERVICE_DEV).toDynamicValue(
  simulateLikeService,
);
