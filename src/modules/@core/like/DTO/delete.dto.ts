import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IDeleteLikeDTO {
  id: string;
}

export const DeleteLikeSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
