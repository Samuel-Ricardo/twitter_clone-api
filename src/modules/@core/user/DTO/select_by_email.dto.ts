import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface ISelectUserByEmailDTO {
  email: string;
}

export const selectUserByEmailSchema = z
  .object({
    email: z.string().nonempty().email().catch(catchZod),
  })
  .catch(catchZod);
