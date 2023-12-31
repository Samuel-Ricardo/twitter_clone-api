import 'reflect-metadata';
import { MODULES } from '@modules';

import { UserController, UserService } from '@User';
import { DeepMockProxy } from 'jest-mock-extended';
import { CREATE_USER_DATA, MockFactory, VALID_USER } from '@test/mock';

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

    expect(service.selectAll).toHaveBeenCalledTimes(1);
    expect(service.selectAll).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: Select by - [id] => [USER]', async () => {
    service.selectById.mockResolvedValue(VALID_USER);

    const result = await controller.selectById({ id: VALID_USER.id });

    expect(result).toBeDefined();
    expect(result).toEqual({ user: VALID_USER });

    expect(service.selectById).toHaveBeenCalledTimes(1);
    expect(service.selectById).toHaveBeenCalledWith({ id: VALID_USER.id });
  });

  it('[UNIT] | Should: Select by - [email] => [USER]', async () => {
    service.selectByEmail.mockResolvedValue(VALID_USER);

    const result = await controller.selectByEmail({
      email: VALID_USER.email,
    });

    expect(result).toBeDefined();
    expect(result).toEqual({ user: VALID_USER });

    expect(service.selectByEmail).toHaveBeenCalledTimes(1);
    expect(service.selectByEmail).toHaveBeenCalledWith({
      email: VALID_USER.email,
    });
  });

  it('[UNIT] | Should: Select by - [credentials] => [USER]', async () => {
    service.selectByCredentials.mockResolvedValue(VALID_USER);

    const result = await controller.selectByCredentials({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });

    expect(result).toBeDefined();
    expect(result).toEqual({ user: VALID_USER });

    expect(service.selectByCredentials).toHaveBeenCalledTimes(1);
    expect(service.selectByCredentials).toHaveBeenCalledWith({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });
  });

  it('[UNIT] | Should: Create => [USER]', async () => {
    service.create.mockResolvedValue(VALID_USER);

    const result = await controller.create(CREATE_USER_DATA);
    const expectedResult = { user: VALID_USER };

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);

    expect(service.create).toHaveBeenCalledTimes(1);
    expect(service.create).toHaveBeenCalledWith(CREATE_USER_DATA);
  });

  it('[UNIT] | Should: Update => [USER]', async () => {
    const UPDATED_USER = {
      ...VALID_USER,
      name: 'Tomi!',
    };

    service.update.mockResolvedValue(UPDATED_USER);

    const result = await controller.update({
      id: VALID_USER.id,
      name: UPDATED_USER.name,
    });

    expect(result).toBeDefined();
    expect(result).toEqual({ user: UPDATED_USER });

    expect(VALID_USER.id).toEqual(result.user.id);
    expect(VALID_USER.name).not.toEqual(result.user.name);

    expect(service.update).toHaveBeenCalledTimes(1);
    expect(service.update).toHaveBeenCalledWith({
      id: VALID_USER.id,
      name: UPDATED_USER.name,
    });
  });
});
