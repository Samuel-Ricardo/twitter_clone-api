import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const UpdateCommentSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
  })
  .catch(catchZod);
