import { ErrorRequestHandler } from 'express';
import { MiddlewareModule } from './middleware.module';
import { MiddlewareRegistry } from './middleware.registry';

export const MiddlewareFactory = {
  ERROR: MiddlewareModule.get<ErrorRequestHandler>(MiddlewareRegistry.ERROR),
};
