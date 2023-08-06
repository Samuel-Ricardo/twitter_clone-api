import { UserController } from '@User';
import { interfaces } from 'inversify';
import { UserMockRegistry } from '../user.resgistry';

export const simulateUserController = (context: interfaces.Context) => () =>
  new UserController(
    context.container.get(UserMockRegistry.SERVICE.MOCK.DEFAULT),
  );
