import { PostService } from '../../../../../../src/modules/@core/post/service/post.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
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
import { ISimulatePostService } from '@test/@types/simulate/post.service';

export const mockPostService = () => mockDeep<PostService>();

export const simulatePostService = ({
  container,
}: interfaces.Context): ISimulatePostService => {
  const create = container.get<DeepMockProxy<CreatePostUseCase>>(
    PostMockRegistry.USE_CASE.CREATE,
  );
  const update = container.get<DeepMockProxy<UpdatePostUseCase>>(
    PostMockRegistry.USE_CASE.UPDATE,
  );
  const deletePost = container.get<DeepMockProxy<DeletePostUseCase>>(
    PostMockRegistry.USE_CASE.DELETE,
  );
  const list = container.get<DeepMockProxy<ListPostsUseCase>>(
    PostMockRegistry.USE_CASE.FIND.ALL,
  );
  const detail = container.get<DeepMockProxy<DetailPostsUseCase>>(
    PostMockRegistry.USE_CASE.FIND.BY.ID,
  );
  const listUserPosts = container.get<DeepMockProxy<ListUserPostsUseCase>>(
    PostMockRegistry.USE_CASE.FIND.BY.AUTHOR,
  );

  const security = {
    encrypt: {
      before: {
        post: container.get<any>(
          PostMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POST,
        ),
        posts: container.get<any>(
          PostMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POSTS,
        ),
      },
    },
  };

  const service = new PostService(
    create,
    update,
    deletePost,
    list,
    detail,
    listUserPosts,
    security.encrypt.before.post,
    security.encrypt.before.posts,
  );

  return {
    service,
    create,
    update,
    deletePost,
    list,
    detail,
    listUserPosts,
    policy: { security },
  };
};
