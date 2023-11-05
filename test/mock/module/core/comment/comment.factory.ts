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
import { EncryptCommentBeforeSendPolicy } from '@Core/comment/policy/security/encrypt/before/comment.policy';
import { EncryptCommentListBeforeSendPolicy } from '@Core/comment/policy/security/encrypt/before/comments.policy';
import { GetCommentByIdUseCase } from '@Core/comment/use-case/get_by_id.use-case';

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
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          COMMENT: () =>
            CommentMockModule.get<
              DeepMockProxy<EncryptCommentBeforeSendPolicy>
            >(CommentMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENT),
          COMMENTS: () =>
            CommentMockModule.get<
              DeepMockProxy<EncryptCommentListBeforeSendPolicy>
            >(CommentMockRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENTS),
        },
      },
    },
  },
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
        ID: () =>
          CommentMockModule.get<DeepMockProxy<GetCommentByIdUseCase>>(
            CommentMockRegistry.USE_CASE.GET.BY.ID,
          ),
      },
    },
  },
};
