import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const notificationSchema = z
  .object({
    id: z.string(),
    userId: z.string(),
    type: z.string(),
    body: z.string(),
    eventId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    visualizedAt: z.date().optional().nullable(),
  })
  .catch(catchZod);
