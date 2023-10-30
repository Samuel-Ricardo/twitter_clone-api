import { interfaces } from 'inversify';
import { UserMockRegistry } from '../user.resgistry';
import { mockDeep } from 'jest-mock-extended';
import { UserService } from '@User';

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
    context.container.get(UserMockRegistry.POLICY.SECURITY.ENCRYPT.USER),
    context.container.get(
      UserMockRegistry.POLICY.SECURITY.AUTHORIZATION.AFTER.SELECT.BY
        .CREDENTIALS,
    ),
    context.container.get(UserMockRegistry.POLICY.SECURITY.ENCRYPT.PASSWORD),
  );

export const mockUserService = () => mockDeep<UserService>();
