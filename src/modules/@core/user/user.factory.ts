import { interfaces } from 'inversify';
import { UserController } from './controller';
import { UserService } from './service';
import { CreateUserUseCase } from './use-case';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';
import { User } from './user.entity';
import { User as PrismaUser } from '@prisma/client';
import { UpdateUserDTO } from './DTO';
import { UpdateUserUseCase } from './use-case/update.use-case';
import { DeleteUserUseCase } from './use-case/delete.use-case';
import { SelectAllUsersUseCase } from './use-case/select_all.use-case';
import { SelectUserByIdUseCase } from './use-case/select_by_id.use-case';
import { UserValidator } from './validator/user.validator';
import { SelectUserByCredentialsUseCase } from './use-case/select_by_credentials.use-case';
import { ValidateUserPasswordUseCase } from './use-case/validate_password.use-case';
import { SelectUserByEmailUseCase } from './use-case/select_by_email.use-case';
import { EncryptUserBeforeSendPolicy } from './policy/security/encrypt/user.policy';
import { AuthorizeAllExistingUserPolicy } from './policy/authorization/authorization.policy';

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
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        USER: () =>
          UserModule.get<EncryptUserBeforeSendPolicy>(
            UserRegistry.POLICY.SECURITY.ENCRYPT.USER,
          ),
      },
    },
    AUTHORIZATION: {
      AUTHORIZE: {
        ALL: () =>
          UserModule.get<AuthorizeAllExistingUserPolicy>(
            UserRegistry.POLICY.AUTHORIZATION.AUTHORIZE.ALL,
          ),
      },
    },
  },
  USE_CASE: {
    CREATE: () =>
      UserModule.get<CreateUserUseCase>(UserRegistry.USE_CASE.CREATE),
    UPDATE: () =>
      UserModule.get<UpdateUserUseCase>(UserRegistry.USE_CASE.UPDATE),
    DELETE: () =>
      UserModule.get<DeleteUserUseCase>(UserRegistry.USE_CASE.DELETE),
    SELECT: {
      ALL: () =>
        UserModule.get<SelectAllUsersUseCase>(UserRegistry.USE_CASE.SELECT.ALL),
      BY_ID: () =>
        UserModule.get<SelectUserByIdUseCase>(
          UserRegistry.USE_CASE.SELECT.BY_ID,
        ),
      BY: {
        CREDENTIALS: () =>
          UserModule.get<SelectUserByCredentialsUseCase>(
            UserRegistry.USE_CASE.SELECT.BY.CREDENTIALS,
          ),
        EMAIL: () =>
          UserModule.get<SelectUserByEmailUseCase>(
            UserRegistry.USE_CASE.SELECT.BY.EMAIL,
          ),
      },
    },
    VALIDATE: {
      PASSWORD: () =>
        UserModule.get<ValidateUserPasswordUseCase>(
          UserRegistry.USE_CASE.VALIDATE.PASSWORD,
        ),
    },
  },
  ENTITY: () =>
    UserModule.get<interfaces.Factory<User, [UpdateUserDTO]>>(
      UserRegistry.ENTITY,
    ),

  FOR_PRISMA: () =>
    UserModule.get<interfaces.Factory<User, [PrismaUser]>>(
      UserRegistry.FOR_PRISMA,
    ),
  VALIDATOR: () => UserModule.get<UserValidator>(UserRegistry.VALIDATOR),
};
