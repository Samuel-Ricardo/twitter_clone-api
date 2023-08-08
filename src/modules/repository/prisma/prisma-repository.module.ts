import { Container } from 'inversify';
import { PrismaUserRepository } from './user/user.repository';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaPostRepository } from './post/post.repository';

const Module = new Container({
  autoBindInjectable: true,
});

Module.bind(PrismaRepositoryRegistry.USER).to(PrismaUserRepository);
Module.bind(PrismaRepositoryRegistry.POST).to(PrismaPostRepository);

export const PrismaRepositoryModule = Container.merge(Module, PrismaModule);
