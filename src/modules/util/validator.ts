import { InvalidDataError } from '../error/data';
import { z } from 'zod';

export const catchZod = (zod: {
  error: z.ZodError<any>;
  input: any | undefined;
}) => {
  throw new InvalidDataError(JSON.parse(zod.error.message));
};
