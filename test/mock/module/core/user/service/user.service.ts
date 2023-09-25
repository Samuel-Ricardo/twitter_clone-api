import { UserService } from '@User';
import { interfaces } from 'inversify';
import { UserMockRegistry } from '../user.resgistry';
import { mockDeep } from 'jest-mock-extended';

export const simulateUserService = (context: interfaces.Context) =>
  new UserService(
    context.container.get(UserMockRegistry.USE_CASE.CREATE),
    context.container.get(UserMockRegistry.USE_CASE.UPDATE),
    context.container.get(UserMockRegistry.USE_CASE.DELETE),
    context.container.get(UserMockRegistry.USE_CASE.SELECT.ALL),
    context.container.get(UserMockRegistry.USE_CASE.SELECT.BY_ID),
    context.container.get(UserMockRegistry.USE_CASE.SELECT.BY.CREDENTIALS),
    context.container.get(UserMockRegistry.USE_CASE.VALIDATE.PASSWORD),
    context.container.get(UserMockRegistry.USE_CASE.SELECT.BY.EMAIL),
  );

export const mockUserService = () => mockDeep<UserService>();
