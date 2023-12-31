import { Container } from 'inversify';
import { PrismaPostRepository } from './post/post.repository';
import { PrismaUserRepository } from './user/user.repository';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaLikeRepository } from './like';
import { PrismaFollowRepository } from './follow';
import { PrismaCommentRepository } from './comment';
import { PrismaNotificationRepository } from './notification';

const Module = new Container({
  autoBindInjectable: true,
});
export const PrismaRepositoryModule = Container.merge(Module, PrismaModule);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.USER).to(
  PrismaUserRepository,
);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.POST).to(
  PrismaPostRepository,
);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.LIKE).to(
  PrismaLikeRepository,
);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.FOLLOW).to(
  PrismaFollowRepository,
);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.COMMENT).to(
  PrismaCommentRepository,
);

PrismaRepositoryModule.bind(PrismaRepositoryRegistry.NOTIFICATION).to(
  PrismaNotificationRepository,
);
