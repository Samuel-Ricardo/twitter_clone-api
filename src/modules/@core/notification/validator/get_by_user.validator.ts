import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const GetNotificationByUserSchema = z
  .object({
    userId: z.string(),
  })
  .catch(catchZod);
