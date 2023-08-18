import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const GetUserCommentsSchema = z
  .object({
    authorId: z.string().catch(catchZod),
  })
  .catch(catchZod);
