import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { NoDataProvidedError } from '@modules/error/data';
import { logger } from '@logger';

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(
        { context: 'VALIDATOR', message: 'Data:' },
        { params: req.params, body: req.body },
      );

      if (Object.keys({ ...req.body }).length > 0)
        return schema.parse(req.body);
      if (Object.keys({ ...req.params }).length > 0)
        return schema.parse(req.params);

      throw new NoDataProvidedError('No data provided');
    } catch (e) {
      next(e);
    } finally {
      next();
    }
  };
