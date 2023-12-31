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
import { simulateUserController } from './controller/user.controller';
import { mockSelectUserByCredentialsUseCase } from './use-case/select_by_credentials';
import { mockValidateUserPasswordUseCase } from './use-case/validate_password';
import { mockSelectUserByEmailUseCase } from './use-case/select_by_email';
import { mockEncryptUserBeforeSendPolicy } from './policy/security/encrypt/user.policy';
import { mockHashPasswordBeforeSavePolicy } from './policy/security/encrypt/password.policy';
import { mockAuthorizeAllExistingUserPolicy } from './policy/security/authorization/authorization.policy';
import { mockAuthorizeUserAfterSelectByCredentialsPolicy } from './policy/security/authorization/after/select/by/credentials.policy';
import { mockEncryptUserListBeforeSendPolicy } from './policy/security/encrypt/users.policy';

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

UserMockModule.bind(
  UserMockRegistry.USE_CASE.SELECT.BY.CREDENTIALS,
).toDynamicValue(mockSelectUserByCredentialsUseCase);

UserMockModule.bind(UserMockRegistry.USE_CASE.SELECT.BY.EMAIL).toDynamicValue(
  mockSelectUserByEmailUseCase,
);

UserMockModule.bind(UserMockRegistry.USE_CASE.VALIDATE.PASSWORD).toDynamicValue(
  mockValidateUserPasswordUseCase,
);

UserMockModule.bind(
  UserMockRegistry.POLICY.SECURITY.ENCRYPT.USER,
).toDynamicValue(mockEncryptUserBeforeSendPolicy);

UserMockModule.bind(
  UserMockRegistry.POLICY.SECURITY.ENCRYPT.PASSWORD,
).toDynamicValue(mockHashPasswordBeforeSavePolicy);

UserMockModule.bind(
  UserMockRegistry.POLICY.SECURITY.AUTHORIZATION.ALL,
).toDynamicValue(mockAuthorizeAllExistingUserPolicy);

UserMockModule.bind(
  UserMockRegistry.POLICY.SECURITY.AUTHORIZATION.AFTER.SELECT.BY.CREDENTIALS,
).toDynamicValue(mockAuthorizeUserAfterSelectByCredentialsPolicy);

UserMockModule.bind(UserMockRegistry.POLICY.SECURITY.ENCRYPT.USERS)
  .toDynamicValue(mockEncryptUserListBeforeSendPolicy)

UserMockModule.bind(UserMockRegistry.SERVICE.SIMULATE_DEFAULT).toDynamicValue(
  (context) => simulateUserService(context),
);

UserMockModule.bind(UserMockRegistry.SERVICE.MOCK.DEFAULT).toDynamicValue(
  mockUserService,
);

UserMockModule.bind(
  UserMockRegistry.CONTROLLER.SIMULATE.DEFAULT,
).toDynamicValue((context) => simulateUserController(context));
