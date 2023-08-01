import { Container, interfaces } from 'inversify';
import { UserRegistry } from './user.registry';
import { UserService } from './service';
import { UserController } from './controller';
import { CreateUserUseCase } from './use-case';
import { User } from './user.entity';
import { UpdateUserDTO } from './DTO';

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
