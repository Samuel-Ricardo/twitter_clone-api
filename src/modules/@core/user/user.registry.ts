export const UserRegistry = {
  ENTITY: Symbol.for('UserENtity'),
  FOR_PRISMA: Symbol.for('UserForPrisma'),
  SERVICE: {
    DEFAULT: Symbol.for('UserService'),
  },
  CONTROLLER: {
    DEFAULT: Symbol.for('UserController'),
  },
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        USER: Symbol.for('EncryptUserBeforeSend'),
      },
    },
    AUTHORIZATION: {
      AUTHORIZE: {
        ALL: Symbol.for('AuthorizeAllExistingUserPolicy'),
        BY: {
          CREDENTIALS: Symbol.for('AuthorizeUserByCredentialsPolicy'),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: Symbol.for('CreateUserUseCase'),
    UPDATE: Symbol.for('UpdateUserUseCase'),
    AUTHORIZE: Symbol.for('AuthorizeUserUseCase'),
    SELECT: {
      BY_ID: Symbol.for('SelectUserByIdUseCase'),
      ALL: Symbol.for('SelectAllUsersUseCase'),
      BY: {
        CREDENTIALS: Symbol.for('SelectUserByCredentialsUseCase'),
        EMAIL: Symbol.for('SelectUserByEmailUseCase'),
      },
    },
    VALIDATE: {
      PASSWORD: Symbol.for('ValidatePasswordUseCase'),
    },
    DELETE: Symbol.for('DeleteUserUseCase'),
  },
  VALIDATOR: Symbol.for('User.Validator'),
};
