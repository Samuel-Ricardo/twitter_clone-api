import { Container } from 'inversify';
import {
  mockCreateUserUseCase,
  mockDeleteUserUseCase,
  mockSelectAllUsersUseCase,
  mockSelectUserByIdUseCase,
  mockUpdateUserUseCase,
} from './use-case';
import { UserMockRegistry } from './user.resgistry';
import { mockUserService, simulateUserService } from './service/user.service';

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

UserMockModule.bind(UserMockRegistry.USE_CASE.SELECT.BY_ID).toDynamicValue(
  mockSelectUserByIdUseCase,
);

UserMockModule.bind(UserMockRegistry.SERVICE.SIMULATE_DEFAULT).toDynamicValue(
  (context) => simulateUserService(context),
);

UserMockModule.bind(UserMockRegistry.SERVICE.MOCK.DEFAULT).toDynamicValue(
  mockUserService,
);
