import { Container, interfaces } from 'inversify';
import { UserRegistry } from './user.registry';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { User } from './user.entity';
import { User as PrismaUser } from '@prisma/client';
import { UpdateUserDTO } from './DTO/update.dto';
import { CreateUserUseCase } from './use-case/create.use-case';
import { UpdateUserUseCase } from './use-case/update.use-case';
import { DeleteUserUseCase } from './use-case/delete.use-case';
import { SelectAllUsersUseCase } from './use-case/select_all.use-case';
import { SelectUserByIdUseCase } from './use-case/select_by_id.use-case';
import { RepositoryModule } from '../../repository/repository.module';
import { UserValidator } from './validator/user.validator';
import { ValidateUserPasswordUseCase } from './use-case/validate_password.use-case';
import { SelectUserByCredentialsUseCase } from './use-case/select_by_credentials.use-case';
import { SelectUserByEmailUseCase } from './use-case/select_by_email.use-case';
import { EncryptUserBeforeSendPolicy } from './policy/security/encrypt/user.policy';
import { CYPHER_MODULE } from '../../cypher/cypher.module';

const Module = new Container({ autoBindInjectable: true });

Module.bind(UserRegistry.ENTITY).toFactory<User, [UpdateUserDTO]>(
  (context: interfaces.Context) => (user: UpdateUserDTO) =>
    new User(
      user.id,
      user.name!,
      user.username!,
      user.email!,
      user.password!,
      user.createdAt!,
      user.updatedAt!,
      user.hasNotifications!,
      user.sessionToken,
      user.bio,
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    ),
);

Module.bind(UserRegistry.FOR_PRISMA).toFactory<User, [PrismaUser]>(
  (context: interfaces.Context) => (user: PrismaUser) =>
    new User(
      user.id,
      user.name,
      user.username,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt,
      user.hasNotifications,
      user.sessionToken,
      user.bio,
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    ),
);

Module.bind(UserRegistry.POLICY.SECURITY.ENCRYPT.USER).to(
  EncryptUserBeforeSendPolicy,
);

Module.bind(UserRegistry.USE_CASE.CREATE).to(CreateUserUseCase);
Module.bind(UserRegistry.USE_CASE.UPDATE).to(UpdateUserUseCase);
Module.bind(UserRegistry.USE_CASE.DELETE).to(DeleteUserUseCase);
Module.bind(UserRegistry.USE_CASE.SELECT.ALL).to(SelectAllUsersUseCase);
Module.bind(UserRegistry.USE_CASE.SELECT.BY_ID).to(SelectUserByIdUseCase);
Module.bind(UserRegistry.USE_CASE.VALIDATE.PASSWORD).to(
  ValidateUserPasswordUseCase,
);
Module.bind(UserRegistry.USE_CASE.SELECT.BY.CREDENTIALS).to(
  SelectUserByCredentialsUseCase,
);
Module.bind(UserRegistry.USE_CASE.SELECT.BY.EMAIL).to(SelectUserByEmailUseCase);

Module.bind(UserRegistry.VALIDATOR).to(UserValidator);

Module.bind(UserRegistry.SERVICE.DEFAULT).to(UserService);
Module.bind(UserRegistry.CONTROLLER.DEFAULT).to(UserController);

const UserModule = Container.merge(Module, RepositoryModule, CYPHER_MODULE);

export { UserModule };
