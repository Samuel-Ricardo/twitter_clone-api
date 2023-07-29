import { Container } from 'inversify';
import { PrismaUserRepository } from './user.repository';

export const PrismaRepositoryRegistry = {
  USER_REPOSITORY: Symbol.for('USER_REPOSITORY'),
};

export const PrismaRepositoryModule = new Container({
  autoBindInjectable: true,
});
PrismaRepositoryModule.bind(PrismaRepositoryRegistry.USER_REPOSITORY).to(
  PrismaUserRepository,
);
