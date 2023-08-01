import { Container } from 'inversify';
import { PrismaUserRepository } from './user.repository';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaModule } from '../../prisma/prisma.module';

const Module = new Container({
  autoBindInjectable: true,
});

Module.bind(PrismaRepositoryRegistry.USER).to(PrismaUserRepository);

export const PrismaRepositoryModule = Container.merge(Module, PrismaModule);
