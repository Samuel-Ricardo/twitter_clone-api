import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const GetCommentByPostSchema = z
  .object({
    postId: z.string().catch(catchZod),
  })
  .catch(catchZod);
