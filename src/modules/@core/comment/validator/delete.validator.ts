import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const DeleteCommentSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
