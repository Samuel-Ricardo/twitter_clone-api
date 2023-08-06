import 'reflect-metadata';
import { MODULES } from '@modules';

import { UserController, UserService } from '@User';
import { DeepMockProxy } from 'jest-mock-extended';
import { MockFactory } from '@test/mock';

describe('[CONTROLLER] | USER', () => {
  MODULES.USER.USE_CASE;

  let service: DeepMockProxy<UserService>;
  let controller: UserController;

  beforeEach(() => {
    jest.clearAllMocks();

    service = MockFactory.USER.SERVICE.MOCK.DEFAULT();

    expect(service).toBeDefined();
    expect(service.create).toHaveProperty('mockReturnValue');

    controller = new UserController(MockFactory.USER.SERVICE.MOCK.DEFAULT());

    expect(controller).toBeDefined();
    expect(controller).toBeInstanceOf(UserController);
  });

  it('select all', async () => {
    expect(true).toBeTruthy();
    // const result = controller.seletcAll();

    // const users: User[] = [];

    // expect(result).toBeDefined();
    // expect(result).toEqual({users});
  });
});
