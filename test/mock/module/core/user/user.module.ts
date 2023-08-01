import { Container } from 'inversify';
import {
  mockCreateUserUseCase,
  mockDeleteUserUseCase,
  mockSelectAllUsersUseCase,
  mockUpdateUserUseCase,
} from './use-case';
import { UserMockRegistry } from './user.resgistry';

export const UserMockModule = new Container({ autoBindInjectable: true });

UserMockModule.bind(UserMockRegistry.USE_CASE.CREATE).toDynamicValue(
  mockCreateUserUseCase,
);

UserMockModule.bind(UserMockRegistry.USE_CASE.UPDATE).toDynamicValue(
  mockUpdateUserUseCase,
);

UserMockModule.bind(UserMockRegistry.USE_CASE.DELETE).toDynamicValue(
  mockDeleteUserUseCase,
);

UserMockModule.bind(UserMockRegistry.USE_CASE.SELECT.ALL).toDynamicValue(
  mockSelectAllUsersUseCase,
);
