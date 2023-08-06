import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface ICreatePostDTO {
  authorId: string;
  body: string;
  image?: string;
}

export const CreatePostSchema = z.object({
  authorId: z.string().nonempty().catch(catchZod),
  body: z.string().nonempty().catch(catchZod),
  image: z.string().optional().catch(catchZod),
});
