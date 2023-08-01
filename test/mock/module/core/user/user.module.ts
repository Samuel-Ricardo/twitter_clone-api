import { Container } from 'inversify';
import { mockCreateUserUseCase } from './use-case/create';
import { UserMockRegistry } from './user.resgistry';

export const UserMockModule = new Container({ autoBindInjectable: true });

UserMockModule.bind(UserMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateUserUseCase,
);
