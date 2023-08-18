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

CommentModule.bind(CommentRegistry.SERVICE).to(CommentService);
