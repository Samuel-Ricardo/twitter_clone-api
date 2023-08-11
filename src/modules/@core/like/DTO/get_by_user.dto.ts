import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfUserDTO {
  userID: string;
}

export const GetLikesOfUserSchema = z
  .object({
    userID: z.string().catch(catchZod),
  })
  .catch(catchZod);
