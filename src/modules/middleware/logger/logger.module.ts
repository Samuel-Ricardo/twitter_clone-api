import { logger } from '@logger';
import { RequestHandler } from 'express';

export const loggerMiddleware: RequestHandler = (req, res, next) => {
  const method = req.method;
  const body = req.body;
  const params = req.params;
  const response = res.json();

  switch (method) {
    case 'POST':
      logger.info({ context: 'POST', message: `url: ${req.url}` }, { body });
      break;

    case 'PUT':
      logger.info({ context: 'PUT', message: `url: ${req.url}` }, { body });
      break;

    case 'DELETE':
      logger.info(
        { context: 'DELETE', message: `url: ${req.url}` },
        { params },
      );
      break;

    case 'GET':
      logger.info(
        { context: 'GET', message: `url: ${req.url}` },
        { params, response },
      );
      break;
  }

  next();
};
