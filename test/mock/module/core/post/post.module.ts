import { Container } from 'inversify';
import { PostMockRegistry } from './post.registry';
import {
  mockCreatePostUseCase,
  mockUpdatePostUseCase,
  mockDeletePostUseCase,
  mockDetailPostUseCase,
  mockListAllPostsUseCase,
  mockListUserPostsUseCase,
} from './use-case';
import { PostModule } from '@Post';
import { mockPostService, simulatePostService } from './service/post.service';

export const PostMockModule = new Container({ autoBindInjectable: true });

PostMockModule.bind(PostMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreatePostUseCase,
);
PostMockModule.bind(PostMockRegistry.USE_CASE.UPDATE).toDynamicValue(
  mockUpdatePostUseCase,
);
PostMockModule.bind(PostMockRegistry.USE_CASE.DELETE).toDynamicValue(
  mockDeletePostUseCase,
);
PostMockModule.bind(PostMockRegistry.USE_CASE.FIND.ALL).toDynamicValue(
  mockListAllPostsUseCase,
);
PostMockModule.bind(PostMockRegistry.USE_CASE.FIND.BY.ID).toDynamicValue(
  mockDetailPostUseCase,
);
PostMockModule.bind(PostMockRegistry.USE_CASE.FIND.BY.AUTHOR).toDynamicValue(
  mockListUserPostsUseCase,
);

PostModule.bind(PostMockRegistry.SERVICE.DEFAULT.MOCK).toDynamicValue(
  mockPostService,
);
PostModule.bind(PostMockRegistry.SERVICE.DEFAULT.SIMULATE).toDynamicValue(
  simulatePostService,
);
