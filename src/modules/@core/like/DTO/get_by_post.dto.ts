import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfPostDTO {
  likedId: string;
}

export const GetLikesOfPostSchema = z
  .object({
    likedId: z.string().catch(catchZod),
  })
  .catch(catchZod);
