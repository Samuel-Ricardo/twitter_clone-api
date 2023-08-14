import { Container } from 'inversify';
import { MockLikeRegistry } from './like.registry';
import {
  mockCreateLikeUseCase,
  mockDeleteLikeUseCase,
  mockGetLikeOfPostUseCase,
  mockGetLikeOfUserUseCase,
  mockGetLikesOfCommentUseCase,
} from './use-case';

export const MockLikeModule = new Container({ autoBindInjectable: true });

MockLikeModule.bind(MockLikeRegistry.CREATE).toDynamicValue(
  mockCreateLikeUseCase,
);
MockLikeModule.bind(MockLikeRegistry.DELETE).toDynamicValue(
  mockDeleteLikeUseCase,
);
MockLikeModule.bind(MockLikeRegistry.GET.BY.POST).toDynamicValue(
  mockGetLikeOfPostUseCase,
);
MockLikeModule.bind(MockLikeRegistry.GET.BY.USER).toDynamicValue(
  mockGetLikeOfUserUseCase,
);
MockLikeModule.bind(MockLikeRegistry.GET.BY.COMMENT).toDynamicValue(
  mockGetLikesOfCommentUseCase,
);
