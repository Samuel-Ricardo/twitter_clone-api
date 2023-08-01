export const UserRegistry = {
  ENTITY: Symbol.for('UserENtity'),
  FOR_PRISMA: Symbol.for('UserForPrisma'),
  SERVICE: {
    DEFAULT: Symbol.for('UserService'),
  },
  CONTROLLER: {
    DEFAULT: Symbol.for('UserController'),
  },
  USE_CASE: {
    CREATE: Symbol.for('CreateUserUseCase'),
    UPDATE: Symbol.for('UpdateUserUseCase'),
    SELECT: {
      BY_ID: Symbol.for('SelectUserByIdUseCase'),
      ALL: Symbol.for('SelectAllUsersUseCase'),
    },
    DELETE: Symbol.for('DeleteUserUseCase'),
  },
};
