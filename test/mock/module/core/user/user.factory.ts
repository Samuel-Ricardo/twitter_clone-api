import { DeepMockProxy } from 'jest-mock-extended';
import { UserMockModule } from './user.module';
import { UserMockRegistry } from './user.resgistry';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  SelectAllUsersUseCase,
  SelectUserByIdUseCase,
  UpdateUserUseCase,
  UserService,
} from '@User';
import { SelectUserByCredentialsUseCase } from '@User/use-case/select_by_credentials.use-case';
import { ValidateUserPasswordUseCase } from '@User/use-case/validate_password.use-case';
import { SelectUserByEmailUseCase } from '@User/use-case/select_by_email.use-case';
import { EncryptUserBeforeSendPolicy } from '@User/policy/security/encrypt/user.policy';
import { HashPasswrodBeforeSavePolicy } from '@User/policy/security/encrypt/password.policy';
import { AuthorizeAllExistingUserPolicy } from '@User/policy/authorization/authorization.policy';
import { AuthorizeUserAfterSelectByCredentialsPolicy } from '@User/policy/authorization/authorize/after/select/credentials.policy';
import { EncryptUserListBeforeSendPolicy } from '@User/policy/security/encrypt/users.policy';

export const UserMockFactory = {
  SERVICE: {
    SIMULATE_DEFAULT: () =>
      UserMockModule.get<UserService>(
        UserMockRegistry.SERVICE.SIMULATE_DEFAULT,
      ),
    MOCK: {
      DEFAULT: () =>
        UserMockModule.get<DeepMockProxy<UserService>>(
          UserMockRegistry.SERVICE.MOCK.DEFAULT,
        ),
    },
  },
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        USER: () =>
          UserMockModule.get<DeepMockProxy<EncryptUserBeforeSendPolicy>>(
            UserMockRegistry.POLICY.SECURITY.ENCRYPT.USER,
          ),
        USERS: () =>
          UserMockModule.get<DeepMockProxy<EncryptUserListBeforeSendPolicy>>(
            UserMockRegistry.POLICY.SECURITY.ENCRYPT.USERS,
          ),
        PASSWORD: () =>
          UserMockModule.get<DeepMockProxy<HashPasswrodBeforeSavePolicy>>(
            UserMockRegistry.POLICY.SECURITY.ENCRYPT.PASSWORD,
          ),
      },
      AUTHORIZATION: {
        ALL: () =>
          UserMockModule.get<DeepMockProxy<AuthorizeAllExistingUserPolicy>>(
            UserMockRegistry.POLICY.SECURITY.AUTHORIZATION.ALL,
          ),
        AFTER: {
          SELECT: {
            BY: {
              CRENDENTIALS: () =>
                UserMockModule.get<
                  DeepMockProxy<AuthorizeUserAfterSelectByCredentialsPolicy>
                >(
                  UserMockRegistry.POLICY.SECURITY.AUTHORIZATION.AFTER.SELECT.BY
                    .CREDENTIALS,
                ),
            },
          },
        },
      },
    },
  },
  USE_CASE: {
    CREATE: () =>
      UserMockModule.get<DeepMockProxy<CreateUserUseCase>>(
        UserMockRegistry.USE_CASE.CREATE,
      ),
    UPDATE: () =>
      UserMockModule.get<DeepMockProxy<UpdateUserUseCase>>(
        UserMockRegistry.USE_CASE.UPDATE,
      ),
    DELETE: () =>
      UserMockModule.get<DeepMockProxy<DeleteUserUseCase>>(
        UserMockRegistry.USE_CASE.DELETE,
      ),
    SELECT: {
      BY_ID: () =>
        UserMockModule.get<DeepMockProxy<SelectUserByIdUseCase>>(
          UserMockRegistry.USE_CASE.SELECT.BY_ID,
        ),
      ALL: () =>
        UserMockModule.get<DeepMockProxy<SelectAllUsersUseCase>>(
          UserMockRegistry.USE_CASE.SELECT.ALL,
        ),
      BY: {
        CREDENTIALS: () =>
          UserMockModule.get<DeepMockProxy<SelectUserByCredentialsUseCase>>(
            UserMockRegistry.USE_CASE.SELECT.BY.CREDENTIALS,
          ),
        EMAIL: () =>
          UserMockModule.get<DeepMockProxy<SelectUserByEmailUseCase>>(
            UserMockRegistry.USE_CASE.SELECT.BY.EMAIL,
          ),
      },
    },
    VALIDATE: {
      PASSWORD: () =>
        UserMockModule.get<DeepMockProxy<ValidateUserPasswordUseCase>>(
          UserMockRegistry.USE_CASE.VALIDATE.PASSWORD,
        ),
    },
  },
};
