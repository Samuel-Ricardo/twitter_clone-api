import { ErrorRequestHandler, RequestHandler } from 'express';
import { MiddlewareModule } from './middleware.module';
import { MiddlewareRegistry } from './middleware.registry';

export const MiddlewareFactory = {
  ERROR: () =>
    MiddlewareModule.get<ErrorRequestHandler>(MiddlewareRegistry.ERROR),
  LOGGER: {
    APP: () =>
      MiddlewareModule.get<RequestHandler>(MiddlewareRegistry.LOGGER.APP),
    ERROR: () =>
      MiddlewareModule.get<ErrorRequestHandler>(
        MiddlewareRegistry.LOGGER.ERROR,
      ),
  },
  VALIDATOR: {
    USER: {
      CREATE: () =>
        MiddlewareModule.get<RequestHandler>(
          MiddlewareRegistry.VALIDATOR.USER.CREATE,
        ),
    },
  },
};
