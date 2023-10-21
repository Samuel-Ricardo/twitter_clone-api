import { logger } from '@logger';
import { InvalidDataError } from '../error/data';
import { z } from 'zod';

export const catchZod = (zod: {
  error: z.ZodError<any>;
  input: any | undefined;
}) => {
  logger.info({ context: 'ZOD', message: zod.error.message });
  throw new InvalidDataError(JSON.parse(zod.error.message));
};
