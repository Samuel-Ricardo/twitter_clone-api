import { interfaces } from 'inversify';
import { UserController } from './controller';
import { UserService } from './service';
import { CreateUserUseCase } from './use-case';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';
import { User } from '@prisma/client';
import { UpdateUserDTO } from './DTO';
import { UpdateUserUseCase } from './use-case/update.use-case';
import { DeleteUserUseCase } from './use-case/delete.use-case';
import { SelectAllUsersUseCase } from './use-case/select_all.use-case';
import { SelectUserByIdUseCase } from './use-case/select_by_id.use-case';

export const USER_MODULE = {
  DEFAULT: () =>
    UserModule.get<UserController>(UserRegistry.CONTROLLER.DEFAULT),
  SERVICE: {
    DEFAULT: () => UserModule.get<UserService>(UserRegistry.SERVICE.DEFAULT),
  },
  CONTROLLER: {
    DEFAULT: () =>
      UserModule.get<UserController>(UserRegistry.CONTROLLER.DEFAULT),
  },
  USE_CASE: {
    CREATE: () =>
      UserModule.get<CreateUserUseCase>(UserRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      UserModule.get<UpdateUserUseCase>(UserRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      UserModule.get<DeleteUserUseCase>(UserRegistry.USE_CASE.DELETE),
    SELECT_ALL: () =>
      UserModule.get<SelectAllUsersUseCase>(UserRegistry.USE_CASE.SELECT.ALL),
    SELECT_BY_ID: () =>
      UserModule.get<SelectUserByIdUseCase>(UserRegistry.USE_CASE.SELECT.BY_ID),
  },
  ENTITY: () =>
    UserModule.get<interfaces.Factory<User, [UpdateUserDTO]>>(
      UserRegistry.ENTITY,
    ),
};
