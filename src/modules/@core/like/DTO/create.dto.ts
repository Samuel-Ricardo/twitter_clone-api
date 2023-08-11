import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface ICreateLikeDTO {
  userId: string;
  likedId: string;
}

export const CreateLikeSchema = z
  .object({
    userId: z.string(),
    likedId: z.string(),
  })
  .catch(catchZod);
