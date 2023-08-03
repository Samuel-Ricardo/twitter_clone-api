import { Container } from 'inversify';
import { MiddlewareRegistry } from './middleware.registry';
import { ERROR_MIDDLEWARE } from './error';

export const MiddlewareModule = new Container();

MiddlewareModule.bind(MiddlewareRegistry.ERROR).toConstantValue(
  ERROR_MIDDLEWARE,
);
