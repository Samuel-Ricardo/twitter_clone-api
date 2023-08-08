import { RepositoryModule } from '@modules/repository';
import { Container } from 'inversify';
import { PostRegistry } from './post.registry';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  DetailPostsUseCase,
  ListPostsUseCase,
  ListUserPostsUseCase,
  UpdatePostUseCase,
} from './use-case';

const Module = new Container({ autoBindInjectable: true });

Module.bind(PostRegistry.USE_CASE.CREATE).to(CreatePostUseCase);
Module.bind(PostRegistry.USE_CASE.UPDATE).to(UpdatePostUseCase);
Module.bind(PostRegistry.USE_CASE.DELETE).to(DeletePostUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.ALL).to(ListPostsUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.BY.AUTHOR).to(ListUserPostsUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.BY.ID).to(DetailPostsUseCase);

export const PostModule = Container.merge(Module, RepositoryModule);
