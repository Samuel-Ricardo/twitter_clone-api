import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IPostDTO {
  id: string;
  body: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null;
}

export const IPostSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
    authorId: z.string().catch(catchZod),
    createdAt: z.date().catch(catchZod),
    updatedAt: z.date().catch(catchZod),
    image: z.string().nullish().catch(catchZod),
  })
  .catch(catchZod);
