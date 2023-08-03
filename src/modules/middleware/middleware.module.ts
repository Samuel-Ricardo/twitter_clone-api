import { Container } from 'inversify';
import { MiddlewareRegistry } from './middleware.registry';
import { ERROR_MIDDLEWARE } from './error';
import { loggerMiddleware } from './logger/logger.module';
import { errorLoggerMiddleware } from './logger/error/logger.middleware';
import { UserModule } from '@User';
import { validateCreateUserData } from './validator';

const Module = new Container();

Module.bind(MiddlewareRegistry.ERROR).toConstantValue(ERROR_MIDDLEWARE);

Module.bind(MiddlewareRegistry.LOGGER.APP).toConstantValue(loggerMiddleware);
Module.bind(MiddlewareRegistry.LOGGER.ERROR).toConstantValue(
  errorLoggerMiddleware,
);

Module.bind(MiddlewareRegistry.VALIDATOR.USER.CREATE).toConstantValue(
  validateCreateUserData,
);

export const MiddlewareModule = Container.merge(Module, UserModule);
