import { DeepMockProxy } from 'jest-mock-extended';
import { UserMockModule } from './user.module';
import { UserMockRegistry } from './user.resgistry';
import { CreateUserUseCase, UpdateUserUseCase } from '@User';

export const UserMockFactory = {
  USE_CASE: {
    CREATE: () =>
      UserMockModule.get<DeepMockProxy<CreateUserUseCase>>(
        UserMockRegistry.USE_CASE.CREATE,
      ),
    UPDATE: () => {
      UserMockModule.get<DeepMockProxy<UpdateUserUseCase>>(
        UserMockRegistry.USE_CASE.UPDATE,
      );
    },
  },
};
