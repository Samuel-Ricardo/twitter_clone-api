import { logger } from '@logger';
import { RequestHandler } from 'express';

export const loggerMiddleware: RequestHandler = (req, res, next) => {
  const method = req.method;
  const body = req.body;
  const params = req.params;

  switch (method) {
    case 'POST':
      logger.info(
        { context: 'POST', message: `url: ${req.url}` },
        { params, body },
      );
      break;

    case 'PUT':
      logger.info(
        { context: 'PUT', message: `url: ${req.url}` },
        { params, body },
      );
      break;

    case 'DELETE':
      logger.info(
        { context: 'DELETE', message: `url: ${req.url}` },
        { params },
      );
      break;

    case 'GET':
      logger.info({ context: 'GET', message: `url: ${req.url}` }, { params });
      break;
  }

  next();
};
