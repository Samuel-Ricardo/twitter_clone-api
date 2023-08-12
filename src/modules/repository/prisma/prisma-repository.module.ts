import { Container } from 'inversify';
import { PrismaPostRepository } from './post/post.repository';
import { PrismaUserRepository } from './user/user.repository';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaLikeRepository } from './like';

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
