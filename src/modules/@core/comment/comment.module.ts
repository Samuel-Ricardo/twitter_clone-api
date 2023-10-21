import { Container } from 'inversify';
import { CommentRegistry } from './comment.registry';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from './use-case';
import { RepositoryModule } from '../../repository/repository.module';
import { CommentService } from './service/comment.service';
import { CommentController } from './controller';
import { GetCommentByIdUseCase } from './use-case/get_by_id.use-case';

const Module = new Container({ autoBindInjectable: true });

export const CommentModule = Container.merge(Module, RepositoryModule);

CommentModule.bind(CommentRegistry.USE_CASE.CREATE).to(CreateCommentUseCase);
CommentModule.bind(CommentRegistry.USE_CASE.DELETE).to(DeleteCommentUseCase);
CommentModule.bind(CommentRegistry.USE_CASE.UPDATE).to(UpdateCommentUseCase);
CommentModule.bind(CommentRegistry.USE_CASE.GET.BY.POST).to(
  GetPostCommentUseCase,
);
CommentModule.bind(CommentRegistry.USE_CASE.GET.BY.AUTHOR).to(
  GetUserCommnetsUseCase,
);
CommentModule.bind(CommentRegistry.USE_CASE.GET.BY.ID).to(
  GetCommentByIdUseCase,
);

CommentModule.bind(CommentRegistry.SERVICE).to(CommentService);
CommentModule.bind(CommentRegistry.CONTROLLER).to(CommentController);
