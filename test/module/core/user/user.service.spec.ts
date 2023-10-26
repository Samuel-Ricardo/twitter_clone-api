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
import {
  CREATE_USER_DATA,
  MockFactory,
  VALID_USER,
  VALID_USER_DATA,
} from '@test/mock';
import { DeepMockProxy } from 'jest-mock-extended';
import { SelectUserByCredentialsUseCase } from '@User/use-case/select_by_credentials.use-case';
import { ValidateUserPasswordUseCase } from '@User/use-case/validate_password.use-case';
import { SelectUserByEmailUseCase } from '@User/use-case/select_by_email.use-case';
import { EncryptUserBeforeSendPolicy } from '@User/policy/security/encrypt/user.policy';
import { IUserCypher } from '@User/cypher/user.cypher';
import { UserCypher } from '@modules/cypher/user/user.cypher';

describe('[SERVICE] | USER', () => {
  MODULES.USER.USE_CASE;

  let service: UserService;

  let create: DeepMockProxy<CreateUserUseCase>;
  let update: DeepMockProxy<UpdateUserUseCase>;
  let selectAll: DeepMockProxy<SelectAllUsersUseCase>;
  let selectById: DeepMockProxy<SelectUserByIdUseCase>;
  let selectByCredentials: DeepMockProxy<SelectUserByCredentialsUseCase>;
  let selectByEmail: DeepMockProxy<SelectUserByEmailUseCase>;
  let validatePasword: DeepMockProxy<ValidateUserPasswordUseCase>;
  let deleteUser: DeepMockProxy<DeleteUserUseCase>;
  let encryptUserBeforeSendPolicy: DeepMockProxy<EncryptUserBeforeSendPolicy>;

  let cypher: DeepMockProxy<UserCypher>;

  beforeEach(() => {
    jest.clearAllMocks();

    create = MockFactory.USER.USE_CASE.CREATE();
    update = MockFactory.USER.USE_CASE.UPDATE();
    selectAll = MockFactory.USER.USE_CASE.SELECT.ALL();
    selectById = MockFactory.USER.USE_CASE.SELECT.BY_ID();
    selectByCredentials = MockFactory.USER.USE_CASE.SELECT.BY.CREDENTIALS();
    selectByEmail = MockFactory.USER.USE_CASE.SELECT.BY.EMAIL();
    validatePasword = MockFactory.USER.USE_CASE.VALIDATE.PASSWORD();
    deleteUser = MockFactory.USER.USE_CASE.DELETE();
    encryptUserBeforeSendPolicy =
      MockFactory.USER.POLICY.SECURITY.ENCRYPT.USER();

    service = new UserService(
      create,
      update,
      deleteUser,
      selectAll,
      selectById,
      selectByCredentials,
      validatePasword,
      selectByEmail,
      encryptUserBeforeSendPolicy,
    );

    // service = MockFactory.USER.SERVICE.SIMULATE_DEFAULT();

    cypher = MockFactory.CYPHER.USER();

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

  it('should: select - by email [USER]', async () => {
    selectByEmail.execute.mockResolvedValue(VALID_USER);

    const user = await service.selectByEmail({
      email: VALID_USER.email,
    });

    expect(user).toBeDefined();
    expect(user).toStrictEqual(VALID_USER);

    expect(selectByEmail.execute).toHaveBeenCalledTimes(1);
    expect(selectByEmail.execute).toHaveBeenCalledWith({
      email: VALID_USER.email,
    });
  });

  it('should: select - by [credentials] => [USER]', async () => {
    selectByCredentials.execute.mockResolvedValue(VALID_USER);
    validatePasword.execute.mockReturnValue(true);

    const user = await service.selectByCredentials({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });

    expect(user).toBeDefined();
    expect(user).toStrictEqual(VALID_USER);

    expect(selectByCredentials.execute).toHaveBeenCalledTimes(1);
    expect(selectByCredentials.execute).toHaveBeenCalledWith({
      email: VALID_USER.email,
      password: VALID_USER.password,
    });

    expect(validatePasword.execute).toHaveBeenCalledTimes(1);
    expect(validatePasword.execute).toHaveBeenCalledWith({
      password: {
        expected: VALID_USER.password,
        given: VALID_USER.password,
      },
    });
  });

  it('should: create [USER]', async () => {
    create.execute.mockResolvedValue(VALID_USER);
    encryptUserBeforeSendPolicy.execute.mockReturnValue('encrpted_data');

    const encrypted = await service.create(CREATE_USER_DATA);

    expect(encrypted).toBeDefined();
    expect(encrypted.length).toBeGreaterThanOrEqual(1);
    //    expect(user).toStrictEqual(VALID_USER);

    expect(create.execute).toHaveBeenCalledTimes(1);
    expect(create.execute).toHaveBeenCalledWith(CREATE_USER_DATA);

    expect(encryptUserBeforeSendPolicy.execute).toHaveBeenCalledTimes(1);
    expect(encryptUserBeforeSendPolicy.execute).toHaveBeenCalledWith(
      VALID_USER,
    );
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
