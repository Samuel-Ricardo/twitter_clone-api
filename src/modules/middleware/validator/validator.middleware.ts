import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { NoDataProvidedError } from '@modules/error/data';

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body) return schema.parse(req.body);
      if (req.params) return schema.parse(req.params);

      throw new NoDataProvidedError('No data provided');
    } catch (e) {
      next(e);
    } finally {
      next();
    }
  };
