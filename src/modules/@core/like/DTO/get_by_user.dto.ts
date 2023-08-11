import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfUserDTO {
  userId: string;
}

export const GetLikesOfUserSchema = z
  .object({
    userId: z.string().catch(catchZod),
  })
  .catch(catchZod);
