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
import { PostService } from '@Post/service/post.service';
import { PostMockModule } from './post.module';
import { ISimulatePostService } from '@test/@types/simulate/post.service';

export const PostMockFactory = {
  SERVICE: {
    DEFAULT: {
      MOCK: () =>
        PostMockModule.get<DeepMockProxy<PostService>>(
          PostMockRegistry.SERVICE.DEFAULT.MOCK,
        ),
      SIMULATE: () =>
        PostMockModule.get<ISimulatePostService>(
          PostMockRegistry.SERVICE.DEFAULT.SIMULATE,
        ),
    },
  },
  USE_CASE: {
    CREATE: PostMockModule.get<DeepMockProxy<CreatePostUseCase>>(
      PostMockRegistry.USE_CASE.CREATE,
    ),
    UPDATE: PostMockModule.get<DeepMockProxy<UpdatePostUseCase>>(
      PostMockRegistry.USE_CASE.UPDATE,
    ),
    DELETE: PostMockModule.get<DeepMockProxy<DeletePostUseCase>>(
      PostMockRegistry.USE_CASE.DELETE,
    ),
    FIND: {
      ALL: PostMockModule.get<DeepMockProxy<ListPostsUseCase>>(
        PostMockRegistry.USE_CASE.FIND.ALL,
      ),
      BY: {
        ID: PostMockModule.get<DeepMockProxy<DetailPostsUseCase>>(
          PostMockRegistry.USE_CASE.FIND.BY.ID,
        ),
        AUTHOR: PostMockModule.get<DeepMockProxy<ListUserPostsUseCase>>(
          PostMockRegistry.USE_CASE.FIND.BY.AUTHOR,
        ),
      },
    },
  },
};
