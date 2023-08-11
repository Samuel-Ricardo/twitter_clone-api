import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfUserDTO {
  id: string;
}

export const GetLikesOfUserSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
