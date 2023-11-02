import { Container } from 'inversify';
import { PostRegistry } from './post.registry';
import { RepositoryModule } from '../../repository/repository.module';

import { CreatePostUseCase } from './use-case/create.use-case';
import { DeletePostUseCase } from './use-case/delete.use-case';
import { ListPostsUseCase } from './use-case/list_posts.use-case';
import { UpdatePostUseCase } from './use-case/update.use-case';
import { DetailPostsUseCase } from './use-case/post_details.use-case';
import { ListUserPostsUseCase } from './use-case/list_user_posts';
import { PostService } from './service/post.service';
import { PostController } from './controller/post.controller';
import { EncryptPostBeforeSendPolicy } from './policy/security/encrypt/before/post.policy';
import { EncryptPostListBeforeSendPolicy } from './policy/security/encrypt/before/posts.policy';
import { CYPHER_MODULE } from '../../cypher/cypher.module';

const Module = new Container({ autoBindInjectable: true });

Module.bind(PostRegistry.USE_CASE.CREATE).to(CreatePostUseCase);
Module.bind(PostRegistry.USE_CASE.UPDATE).to(UpdatePostUseCase);
Module.bind(PostRegistry.USE_CASE.DELETE).to(DeletePostUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.ALL).to(ListPostsUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.BY.AUTHOR).to(ListUserPostsUseCase);
Module.bind(PostRegistry.USE_CASE.FIND.BY.ID).to(DetailPostsUseCase);

Module.bind(PostRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POST).to(
  EncryptPostBeforeSendPolicy,
);
Module.bind(PostRegistry.POLICY.SECURITY.ENCRYPT.BEFORE.POSTS).to(
  EncryptPostListBeforeSendPolicy,
);

Module.bind(PostRegistry.SERVICE.DEFAULT).to(PostService);
Module.bind(PostRegistry.CONTROLLER.DEFAULT).to(PostController);

export const PostModule = Container.merge(
  Module,
  RepositoryModule,
  CYPHER_MODULE,
);
