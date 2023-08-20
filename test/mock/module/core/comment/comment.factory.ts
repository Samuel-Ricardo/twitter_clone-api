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
import { CommentService } from '../../../../../src/modules/@core/comment/service';
import { CommentController } from '../../../../../src/modules/@core/comment/controller';
import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { ISimulateController } from '@test/@types/simulate/controller';

export const CommentMockFactory = {
  CONTROLLER: () =>
    CommentMockModule.get<DeepMockProxy<CommentController>>(
      CommentMockRegistry.CONTROLLER,
    ),
  CONTROLLER_DEV: () =>
    CommentMockModule.get<
      ISimulateController<CommentService, CommentController>
    >(CommentMockRegistry.CONTROLLER_DEV),
  SERVICE: () =>
    CommentMockModule.get<DeepMockProxy<CommentService>>(
      CommentMockRegistry.SERVICE,
    ),
  SERVICE_DEV: () =>
    CommentMockModule.get<ISimulateCommentService>(
      CommentMockRegistry.SERVICE_DEV,
    ),
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
