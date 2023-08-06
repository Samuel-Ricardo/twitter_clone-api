import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IUpdatePostDTO {
  body: string;
  image?: string;
}

export const UpdatePostSchema = z
  .object({
    body: z.string().catch(catchZod),
    image: z.string().optional().catch(catchZod),
  })
  .catch(catchZod);
