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
// import { CommentService } from './service/comment.service';

const Module = new Container({ autoBindInjectable: true });

const aCommentModule = Container.merge(Module, RepositoryModule);

aCommentModule.bind(CommentRegistry.USE_CASE.CREATE).to(CreateCommentUseCase);
aCommentModule.bind(CommentRegistry.USE_CASE.DELETE).to(DeleteCommentUseCase);
aCommentModule.bind(CommentRegistry.USE_CASE.UPDATE).to(UpdateCommentUseCase);
aCommentModule
  .bind(CommentRegistry.USE_CASE.GET.BY.POST)
  .to(GetPostCommentUseCase);
aCommentModule
  .bind(CommentRegistry.USE_CASE.GET.BY.AUTHOR)
  .to(GetUserCommnetsUseCase);

// CommentModule.bind(CommentRegistry.SERVICE).to(CommentService);

export { Module as CommentModule };
