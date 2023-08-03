export const MiddlewareRegistry = {
  ERROR: Symbol('Middleware.ERROR'),
  LOGGER: {
    APP: Symbol('Middleware.LOGGER.APP'),
    ERROR: Symbol('Middleware.LOGGER.ERROR'),
  },
  VALIDATOR: {
    USER: {
      CREATE: Symbol('Middleware.VALIDATOR.USER.CREATE'),
      UPDATE: Symbol('Middleware.VALIDATOR.USER.UPDATE'),
      DELETE: Symbol('Middleware.VALIDATOR.USER.DELETE'),
      SELECT: {
        BY: {
          ID: Symbol('Middleware.VALIDATOR.USER.SELECT.BY.ID'),
        },
        ALL: Symbol('Middleware.VALIDATOR.USER.SELECT.ALL'),
      },
    },
  },
};
