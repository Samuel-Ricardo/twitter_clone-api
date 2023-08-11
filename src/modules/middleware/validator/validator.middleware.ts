import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate =
  (schema: z.ZodAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
      return schema.parse(req.body);
    } catch (e) {
      return next(e);
    }
  };
