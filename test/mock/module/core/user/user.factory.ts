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

export const UserMockFactory = {
  SERVICE: {
    SIMULATE_DEFAULT: () =>
      UserMockModule.get<UserService>(
        UserMockRegistry.SERVICE.SIMULATE_DEFAULT,
      ),
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
    },
  },
};
