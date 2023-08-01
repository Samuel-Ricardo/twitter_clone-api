export const UserMockRegistry = {
  SERVICE: {
    SIMULATE_DEFAULT: Symbol.for('SIMULATE_DEFAULT_USER_SERVICE'),
  },
  USE_CASE: {
    CREATE: Symbol.for('CreateUserMockUseCase'),
    UPDATE: Symbol.for('UpdateUserMockUseCase'),
    SELECT: {
      BY_ID: Symbol.for('SelectUserByIdMockUseCase'),
      ALL: Symbol.for('SelectAllUserMockUseCase'),
    },
    DELETE: Symbol.for('DeleteUserMockUseCase'),
  },
};
