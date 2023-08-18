import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const CreateCommentSchema = z
  .object({
    body: z.string(),
    authorId: z.string(),
    postId: z.string(),
  })
  .catch(catchZod);
