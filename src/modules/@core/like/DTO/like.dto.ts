import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface ILikeDTO {
  id: string;
  userId: string;
  likedId: string;
  createdAt: Date;
}

export const LikeSchema = z
  .object({
    id: z.string().catch(catchZod),
    userId: z.string().catch(catchZod),
    likedId: z.string().catch(catchZod),
    createdAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
