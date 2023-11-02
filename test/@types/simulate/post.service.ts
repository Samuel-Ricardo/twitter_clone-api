import { EncryptPostBeforeSendPolicy } from '@Post/policy/security/encrypt/before/post.policy';
import { EncryptPostListBeforeSendPolicy } from '@Post/policy/security/encrypt/before/posts.policy';
import { PostService } from '@Post/service/post.service';
import {
  CreatePostUseCase,
  UpdatePostUseCase,
  DeletePostUseCase,
  ListUserPostsUseCase,
  ListPostsUseCase,
  DetailPostsUseCase,
} from '@Post/use-case';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatePostService {
  service: PostService;
  create: DeepMockProxy<CreatePostUseCase>;
  update: DeepMockProxy<UpdatePostUseCase>;
  deletePost: DeepMockProxy<DeletePostUseCase>;
  listUserPosts: DeepMockProxy<ListUserPostsUseCase>;
  list: DeepMockProxy<ListPostsUseCase>;
  detail: DeepMockProxy<DetailPostsUseCase>;
  policy: {
    security: {
      encrypt: {
        before: {
          post: DeepMockProxy<EncryptPostBeforeSendPolicy>;
          posts: DeepMockProxy<EncryptPostListBeforeSendPolicy>;
        };
      };
    };
  };
}
