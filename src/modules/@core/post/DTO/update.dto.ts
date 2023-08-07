import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IUpdatePostDTO {
  id: string;
  body: string;
  image?: string;
}

export const UpdatePostSchema = z
  .object({
    id: z.string().catch(catchZod),
    body: z.string().catch(catchZod),
    image: z.string().optional().catch(catchZod),
  })
  .catch(catchZod);
