import { PostService } from '@Post/service/post.service';
import { mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { PostMockRegistry } from '../post.registry';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  DetailPostsUseCase,
  ListPostsUseCase,
  ListUserPostsUseCase,
  UpdatePostUseCase,
} from '@Post/use-case';

export const mockPostService = () => mockDeep<PostService>();

export const simulatePostService = ({ container }: interfaces.Context) => {
  const create = container.get<CreatePostUseCase>(
    PostMockRegistry.USE_CASE.CREATE,
  );
  const update = container.get<UpdatePostUseCase>(
    PostMockRegistry.USE_CASE.UPDATE,
  );
  const deletePost = container.get<DeletePostUseCase>(
    PostMockRegistry.USE_CASE.DELETE,
  );
  const list = container.get<ListPostsUseCase>(
    PostMockRegistry.USE_CASE.FIND.ALL,
  );
  const detail = container.get<DetailPostsUseCase>(
    PostMockRegistry.USE_CASE.FIND.BY.ID,
  );
  const listUserPosts = container.get<ListUserPostsUseCase>(
    PostMockRegistry.USE_CASE.FIND.BY.AUTHOR,
  );

  const service = new PostService(
    create,
    update,
    deletePost,
    list,
    detail,
    listUserPosts,
  );

  return { service, create, update, deletePost, list, detail, listUserPosts };
};
