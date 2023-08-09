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
}
