import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const CreateNotificationSchema = z
  .object({
    userId: z.string(),
    type: z.string(),
    body: z.string(),
    eventId: z.string(),
  })
  .catch(catchZod);
