import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfPostDTO {
  postID: string;
}

export const GetLikesOfPostSchema = z
  .object({
    postID: z.string().catch(catchZod),
  })
  .catch(catchZod);
