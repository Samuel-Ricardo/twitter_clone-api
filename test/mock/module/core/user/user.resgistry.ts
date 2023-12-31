export const UserMockRegistry = {
  SERVICE: {
    SIMULATE_DEFAULT: Symbol.for('SIMULATE_DEFAULT_USER_SERVICE'),
    MOCK: {
      DEFAULT: Symbol.for('DEFAULT_USER_SERVICE'),
    },
  },
  CONTROLLER: {
    SIMULATE: {
      DEFAULT: Symbol.for('SIMULATE_DEFAULT_USER_CONTROLLER'),
    },
  },
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        USER: Symbol.for('EncryptUserBeforeSendPolicy'),
        USERS: Symbol.for('MODULE:USER.POLICY.SECURITY.ENCRYPT.USERS'),
        PASSWORD: Symbol.for('EncryptPasswordBeforeSendPolicy'),
      },
      AUTHORIZATION: {
        ALL: Symbol.for('MODULE:USER.POLICY.AUTHORIZATION.ALL'),
        AFTER: {
          SELECT: {
            BY: {
              CREDENTIALS: Symbol.for(
                'MODULE:USER.POLICY.AUTHORIZATION.AFTER.SELECT.BY.CREDENTIALS',
              ),
            },
          },
        },
      },
    },
  },
  USE_CASE: {
    CREATE: Symbol.for('CreateUserMockUseCase'),
    UPDATE: Symbol.for('UpdateUserMockUseCase'),
    SELECT: {
      BY_ID: Symbol.for('SelectUserByIdMockUseCase'),
      ALL: Symbol.for('SelectAllUserMockUseCase'),
      BY: {
        CREDENTIALS: Symbol.for('SelectUserByCredentialsMockUseCase'),
        EMAIL: Symbol.for('SelectUserByEmailMockUseCase'),
      },
    },
    VALIDATE: {
      PASSWORD: Symbol.for('ValidateUserPasswordMockUseCase'),
    },
    DELETE: Symbol.for('DeleteUserMockUseCase'),
  },
};
