import { ReactiveMiddlewareRegistry as REACTIVE } from './reactive/reactive.registry';

export const MiddlewareRegistry = {
  REACTIVE,
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
  SECURITY: {
    CRYPTOGRAPHY: {
      USER: {
        ENCRYPT: {
          CREATE: Symbol(
            'Middleware.SECURITY.CRYPTOGRAPHY.USER.ENCRYPT.CREATE',
          ),
          USER: Symbol.for(
            'Middleware.SECURITY.CRYPTOGRAPHY.USER.ENCRYPT.USER',
          ),
        },
        DECRYPT: {
          CREATE: Symbol(
            'Middleware.SECURITY.CRYPTOGRAPHY.USER.DECRYPT.CREATE',
          ),
        },
      },
    },
  },
};
