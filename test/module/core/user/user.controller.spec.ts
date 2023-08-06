import 'reflect-metadata';
import { MODULES } from '@modules';

import { UserController, UserService } from '@User';
import { DeepMockProxy } from 'jest-mock-extended';
import { MockFactory, VALID_USER } from '@test/mock';

describe('[CONTROLLER] | USER', () => {
  MODULES.USER.USE_CASE;

  let service: DeepMockProxy<UserService>;
  let controller: UserController;

  beforeEach(() => {
    jest.clearAllMocks();

    service = MockFactory.USER.SERVICE.MOCK.DEFAULT();

    expect(service).toBeDefined();
    expect(service.create).toHaveProperty('mockReturnValue');

    controller = new UserController(service);

    expect(controller).toBeDefined();
    expect(controller).toBeInstanceOf(UserController);
  });

  it('[UNIT] | Should: Select - [all] => [USER]', async () => {
    service.selectAll.mockResolvedValue([VALID_USER]);

    const result = await controller.seletcAll();
    const expected = { users: [VALID_USER] };

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });

  it('[UNIT] | Should: Select by - [id] => [USER]', async () => {
    service.selectById.mockResolvedValue(VALID_USER);

    const result = await controller.selectById({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(result).toEqual({ user: VALID_USER });
  });
});
