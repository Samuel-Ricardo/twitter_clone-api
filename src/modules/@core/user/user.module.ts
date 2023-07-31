import { Container } from 'inversify';
import { UserRegistry } from './user.registry';
import { UserService } from './service';
import { UserController } from './controller';

export const UserModule = new Container({ autoBindInjectable: true });

UserModule.bind(UserRegistry.SERVICE.USER).to(UserService);
UserModule.bind(UserRegistry.CONTROLLER.USER).to(UserController);
