import { logger } from '@logger';
import { ErrorRequestHandler } from 'express';

export const errorLoggerMiddleware: ErrorRequestHandler = (
  err: Error,
  req,
  res,
  next,
) => {
  logger.error({ context: 'APP', message: err.message, error: err });
  next(err);
};
