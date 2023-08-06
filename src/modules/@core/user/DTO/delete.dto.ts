import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IDeleteuserDTO {
  id: string;
}

export const DeleteUserScheme = z
  .object({
    id: z.string().nonempty().catch(catchZod),
  })
  .catch(catchZod);
