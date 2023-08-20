import { DeepMockProxy } from 'jest-mock-extended';
import { CommentMockModule } from './comment.module';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from '../../../../../src/modules/@core/comment/use-case';
import { CommentMockRegistry } from './comment.registry';

export const CommentMockFactory = {
  USE_CASE: {
    CREATE: () =>
      CommentMockModule.get<DeepMockProxy<CreateCommentUseCase>>(
        CommentMockRegistry.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      CommentMockModule.get<DeepMockProxy<UpdateCommentUseCase>>(
        CommentMockRegistry.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      CommentMockModule.get<DeepMockProxy<DeleteCommentUseCase>>(
        CommentMockRegistry.USE_CASE.DELETE,
      ),
    GET: {
      BY: {
        POST: () =>
          CommentMockModule.get<DeepMockProxy<GetUserCommnetsUseCase>>(
            CommentMockRegistry.USE_CASE.GET.BY.POST,
          ),
        AUTHOR: () =>
          CommentMockModule.get<DeepMockProxy<GetPostCommentUseCase>>(
            CommentMockRegistry.USE_CASE.GET.BY.AUTHOR,
          ),
      },
    },
  },
};
