import { UserController } from './controller';
import { UserService } from './service';
import { UserModule } from './user.module';
import { UserRegistry } from './user.registry';

export const USER_MODULE = {
  GET: () => UserModule.get<UserController>(UserRegistry.CONTROLLER.USER),
  SERVICE: {
    USER: () => UserModule.get<UserService>(UserRegistry.SERVICE.USER),
  },
  CONTROLLER: {
    USER: () => UserModule.get<UserController>(UserRegistry.CONTROLLER.USER),
  },
};
