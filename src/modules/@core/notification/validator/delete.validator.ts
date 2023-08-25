import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const DeleteNotificationSchema = z
  .object({
    id: z.string(),
  })
  .catch(catchZod);
