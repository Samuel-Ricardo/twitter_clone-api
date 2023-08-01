import { Container, interfaces } from 'inversify';
import { UserRegistry } from './user.registry';
import { UserService } from './service';
import { UserController } from './controller';
import { CreateUserUseCase } from './use-case';
import { User } from './user.entity';
import { UpdateUserDTO } from './DTO';
import { UpdateUserUseCase } from './use-case/update.use-case';
import { DeleteUserUseCase } from './use-case/delete.use-case';
import { SelectAllUsersUseCase } from './use-case/select_all.use-case';
import { SelectUserByIdUseCase } from './use-case/select_by_id.use-case';

export const UserModule = new Container({ autoBindInjectable: true });

UserModule.bind(UserRegistry.ENTITY).toFactory<User, [UpdateUserDTO]>(
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
      user.bio,
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    ),
);

UserModule.bind(UserRegistry.SERVICE.DEFAULT).to(UserService);
UserModule.bind(UserRegistry.CONTROLLER.DEFAULT).to(UserController);

UserModule.bind(UserRegistry.USE_CASE.CREATE).to(CreateUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.UPDATE).to(UpdateUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.DELETE).to(DeleteUserUseCase);
UserModule.bind(UserRegistry.USE_CASE.SELECT.ALL).to(SelectAllUsersUseCase);
UserModule.bind(UserRegistry.USE_CASE.SELECT.BY_ID).to(SelectUserByIdUseCase);
