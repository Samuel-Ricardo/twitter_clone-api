import { Container } from 'inversify';
import { mockCreateUserUseCase, mockUpdateUserUseCase } from './use-case';
import { UserMockRegistry } from './user.resgistry';

export const UserMockModule = new Container({ autoBindInjectable: true });

UserMockModule.bind(UserMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateUserUseCase,
);

UserMockModule.bind(UserMockRegistry.USE_CASE.UPDATE).toDynamicValue(
  mockUpdateUserUseCase,
);
