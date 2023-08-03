export const MiddlewareRegistry = {
  ERROR: Symbol('Middleware.ERROR'),
  LOGGER: {
    APP: Symbol('Middleware.LOGGER.APP'),
    ERROR: Symbol('Middleware.LOGGER.ERROR'),
  },
};