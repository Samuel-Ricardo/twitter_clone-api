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
import { mockPostService, simulatePostService } from './service/post.service';
import {
  mockPostController,
  simulatePostController,
} from './controller/post.controller';
import { mockEncryptPostBeforeSendPolicy } from './policy/security/encrypt/before/post.policy';
import { mockEncryptPostListBeforeSendPolicy } from './policy/security/encrypt/before/posts.policy';

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

PostMockModule.bind(
  PostMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POST,
).toDynamicValue(mockEncryptPostBeforeSendPolicy);

PostMockModule.bind(
  PostMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POSTS,
).toDynamicValue(mockEncryptPostListBeforeSendPolicy);

PostMockModule.bind(PostMockRegistry.SERVICE.DEFAULT.MOCK).toDynamicValue(
  mockPostService,
);
PostMockModule.bind(PostMockRegistry.SERVICE.DEFAULT.SIMULATE).toDynamicValue(
  simulatePostService,
);

PostMockModule.bind(PostMockRegistry.CONTROLLER.DEFAULT.MOCK).toDynamicValue(
  mockPostController,
);
PostMockModule.bind(
  PostMockRegistry.CONTROLLER.DEFAULT.SIMULATE,
).toDynamicValue(simulatePostController);
