import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfCommentDTO {
  likedId: string;
}

export const GetLikesOfCommentSchema = z
  .object({
    likedId: z.string().catch(catchZod),
  })
  .catch(catchZod);
