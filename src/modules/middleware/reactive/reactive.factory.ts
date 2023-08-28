import { ReactiveErrorMiddleware } from './error/error.middleware';
import { ReactiveErrorLoggerMiddleware } from './logger/error/error_logger.middleware';
import { ReactiveLoggerMiddleware } from './logger/logger.middleware';
import { ReactiveMiddlewareModule } from './reactive.module';
import { ReactiveMiddlewareRegistry } from './reactive.registry';

export const ReactiveMiddlewareFactory = {
  ERROR: () =>
    ReactiveMiddlewareModule.get<ReactiveErrorMiddleware>(
      ReactiveMiddlewareRegistry.ERROR,
    ),
  LOGGER: {
    APP: () =>
      ReactiveMiddlewareModule.get<ReactiveLoggerMiddleware>(
        ReactiveMiddlewareRegistry.LOGGER.APP,
      ),
    ERROR: () =>
      ReactiveMiddlewareModule.get<ReactiveErrorLoggerMiddleware>(
        ReactiveMiddlewareRegistry.LOGGER.ERROR,
      ),
  },
};
