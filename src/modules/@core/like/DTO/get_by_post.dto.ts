import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfPostDTO {
  id: string;
}

export const GetLikesOfPostSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
