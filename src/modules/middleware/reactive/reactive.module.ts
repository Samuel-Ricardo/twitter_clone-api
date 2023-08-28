import { Container } from 'inversify';
import { ReactiveMiddlewareRegistry } from './reactive.registry';
import { ReactiveErrorMiddleware } from './error/error.middleware';
import { ReactiveLoggerMiddleware } from './logger/logger.middleware';
import { ReactiveErrorLoggerMiddleware } from './logger/error/error_logger.middleware';
import { ReactiveModule } from '../../reactive/reactive.module';

const Module = new Container({ autoBindInjectable: true });

export const ReactiveMiddlewareModule = Container.merge(Module, ReactiveModule);

Module.bind(ReactiveMiddlewareRegistry.ERROR).toConstantValue(
  ReactiveErrorMiddleware,
);
Module.bind(ReactiveMiddlewareRegistry.LOGGER.APP).toConstantValue(
  ReactiveLoggerMiddleware,
);
Module.bind(ReactiveMiddlewareRegistry.LOGGER.ERROR).toConstantValue(
  ReactiveErrorLoggerMiddleware,
);
