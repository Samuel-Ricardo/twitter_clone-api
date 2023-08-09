import { PostModule } from './post.module';
import { PostRegistry } from './post.registry';
import { PostService } from './service/post.service';
import {
  CreatePostUseCase,
  UpdatePostUseCase,
  DetailPostsUseCase,
  ListUserPostsUseCase,
  ListPostsUseCase,
  DeletePostUseCase,
} from './use-case';

export const PostFactory = {
  SERVICE: {
    DEFAULT: () => PostModule.get<PostService>(PostRegistry.SERVICE.DEFAULT),
  },
  USE_CASE: {
    CREATE: () =>
      PostModule.get<CreatePostUseCase>(PostRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      PostModule.get<UpdatePostUseCase>(PostRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      PostModule.get<DeletePostUseCase>(PostRegistry.USE_CASE.DELETE),
    FIND: {
      ALL: () =>
        PostModule.get<ListPostsUseCase>(PostRegistry.USE_CASE.FIND.ALL),
      BY: {
        ID: () =>
          PostModule.get<DetailPostsUseCase>(PostRegistry.USE_CASE.FIND.BY.ID),
        AUTHOR: () =>
          PostModule.get<ListUserPostsUseCase>(
            PostRegistry.USE_CASE.FIND.BY.AUTHOR,
          ),
      },
    },
  },
};
