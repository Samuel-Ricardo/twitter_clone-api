import { UserController } from './controller';
import { UserService } from './service';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';

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
};
