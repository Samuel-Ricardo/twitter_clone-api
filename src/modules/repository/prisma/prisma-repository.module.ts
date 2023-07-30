import { Container } from 'inversify';
import { PrismaUserRepository } from './user.repository';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';

export const PrismaRepositoryModule = new Container({
  autoBindInjectable: true,
});
PrismaRepositoryModule.bind(PrismaRepositoryRegistry.USER).to(
  PrismaUserRepository,
);
