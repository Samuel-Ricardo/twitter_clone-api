import { PostModule } from '@Post';
import {
  CreatePostUseCase,
  UpdatePostUseCase,
  DeletePostUseCase,
  ListUserPostsUseCase,
  ListPostsUseCase,
  DetailPostsUseCase,
} from '@Post/use-case';
import { DeepMockProxy } from 'jest-mock-extended';
import { PostMockRegistry } from './post.registry';

export const PostMockFactory = {
  USE_CASE: {
    CREATE: PostModule.get<DeepMockProxy<CreatePostUseCase>>(
      PostMockRegistry.USE_CASE.CREATE,
    ),
    UPDATE: PostModule.get<DeepMockProxy<UpdatePostUseCase>>(
      PostMockRegistry.USE_CASE.UPDATE,
    ),
    DELETE: PostModule.get<DeepMockProxy<DeletePostUseCase>>(
      PostMockRegistry.USE_CASE.DELETE,
    ),
    FIND: {
      ALL: PostModule.get<DeepMockProxy<ListPostsUseCase>>(
        PostMockRegistry.USE_CASE.FIND.ALL,
      ),
      BY: {
        ID: PostModule.get<DeepMockProxy<DetailPostsUseCase>>(
          PostMockRegistry.USE_CASE.FIND.BY.ID,
        ),
        AUTHOR: PostModule.get<DeepMockProxy<ListUserPostsUseCase>>(
          PostMockRegistry.USE_CASE.FIND.BY.AUTHOR,
        ),
      },
    },
  },
};
