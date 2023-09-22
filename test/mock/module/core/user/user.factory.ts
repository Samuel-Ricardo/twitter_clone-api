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
