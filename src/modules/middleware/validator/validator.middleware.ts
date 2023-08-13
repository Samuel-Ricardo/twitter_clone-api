import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { NoDataProvidedError } from '@modules/error/data';

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
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
