import 'reflect-metadata';

import { MODULES } from '@modules';

import {
  CreateUserUseCase,
  DeleteUserUseCase,
  SelectAllUsersUseCase,
  SelectUserByIdUseCase,
  UpdateUserUseCase,
} from '@User/use-case';
import { UserService } from '@User/service';
import { MockFactory, VALID_USER, VALID_USER_DATA } from '@test/mock';
import { DeepMockProxy } from 'jest-mock-extended';

describe('[SERVICE] | USER', () => {
  MODULES.USER.USE_CASE;

  let service: UserService;

  let create: DeepMockProxy<CreateUserUseCase>;
  let update: DeepMockProxy<UpdateUserUseCase>;
  let selectAll: DeepMockProxy<SelectAllUsersUseCase>;
  let selectById: DeepMockProxy<SelectUserByIdUseCase>;
  let deleteUser: DeepMockProxy<DeleteUserUseCase>;

  beforeEach(() => {
    jest.clearAllMocks();

    create = MockFactory.USER.USE_CASE.CREATE();
    update = MockFactory.USER.USE_CASE.UPDATE();
    selectAll = MockFactory.USER.USE_CASE.SELECT.ALL();
    selectById = MockFactory.USER.USE_CASE.SELECT.BY_ID();
    deleteUser = MockFactory.USER.USE_CASE.DELETE();

    service = new UserService(
      create,
      update,
      deleteUser,
      selectAll,
      selectById,
    );

    expect(service).toBeDefined();
    expect(service).toBeInstanceOf(UserService);

    expect(create).toBeDefined();
    expect(update).toBeDefined();
    expect(deleteUser).toBeDefined();
    expect(selectAll).toBeDefined();
    expect(selectById).toBeDefined();
  });

  it('should: select - all [USER]', async () => {
    selectAll.execute.mockResolvedValue([VALID_USER]);

    const users = await service.selectAll();

    expect(users).toBeDefined();
    expect(users).toEqual([VALID_USER]);
    expect(users[0]).toStrictEqual(VALID_USER);

    expect(selectAll.execute).toHaveBeenCalledTimes(1);
    expect(selectAll.execute).toHaveBeenCalledWith();
  });

  it('should: select - by id [USER]', async () => {
    selectById.execute.mockResolvedValue(VALID_USER);

    const user = await service.selectById({ id: VALID_USER.id });

    expect(user).toBeDefined();
    expect(user).toStrictEqual(VALID_USER);
    expect(selectById.execute).toHaveBeenCalledTimes(1);
    expect(selectById.execute).toHaveBeenCalledWith({ id: VALID_USER.id });
  });

  it('should: create [USER]', async () => {
    create.execute.mockResolvedValue(VALID_USER);

    const user = await service.create(VALID_USER);

    expect(user).toBeDefined();
    expect(user).toStrictEqual(VALID_USER);
    expect(create.execute).toHaveBeenCalledTimes(1);
    expect(create.execute).toHaveBeenCalledWith(VALID_USER);
  });

  it('should: update [USER]', async () => {
    const UPDATED_USER = {
      ...VALID_USER,
      name: 'updated name',
    };

    const UPDATED_USER_DATA = {
      ...VALID_USER_DATA,
      name: 'updated name',
    };

    update.execute.mockResolvedValue(UPDATED_USER);

    const user = await service.update(UPDATED_USER_DATA);

    expect(user).toBeDefined();
    expect(user).toStrictEqual(UPDATED_USER);
    expect(update.execute).toHaveBeenCalledTimes(1);
    expect(update.execute).toHaveBeenCalledWith(UPDATED_USER_DATA);
  });
});
