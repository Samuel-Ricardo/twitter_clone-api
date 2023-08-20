import { Container } from 'inversify';
import {
  mockCreateCommentUseCase,
  mockUpdateCommentUseCase,
  mockDeleteCommentUseCase,
  mockGetPostCommentUseCase,
  mockGetUserCommentsUseCase,
} from './use-case';
import { CommentMockRegistry } from './comment.registry';
import { mockCommentService, simulateCommentService } from './service';
import { mockCommentController, simulateCommentController } from './controller';

export const CommentMockModule = new Container({ autoBindInjectable: true });

CommentMockModule.bind(CommentMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateCommentUseCase,
);
CommentMockModule.bind(CommentMockRegistry.USE_CASE.UPDATE).toDynamicValue(
  mockUpdateCommentUseCase,
);
CommentMockModule.bind(CommentMockRegistry.USE_CASE.DELETE).toDynamicValue(
  mockDeleteCommentUseCase,
);
CommentMockModule.bind(CommentMockRegistry.USE_CASE.GET.BY.POST).toDynamicValue(
  mockGetPostCommentUseCase,
);
CommentMockModule.bind(
  CommentMockRegistry.USE_CASE.GET.BY.AUTHOR,
).toDynamicValue(mockGetUserCommentsUseCase);

CommentMockModule.bind(CommentMockRegistry.SERVICE).toDynamicValue(
  mockCommentService,
);

CommentMockModule.bind(CommentMockRegistry.SERVICE_DEV).toDynamicValue(
  simulateCommentService,
);

CommentMockModule.bind(CommentMockRegistry.CONTROLLER).toDynamicValue(
  mockCommentController,
);
CommentMockModule.bind(CommentMockRegistry.CONTROLLER_DEV).toDynamicValue(
  simulateCommentController,
);