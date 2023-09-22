import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface ISelectUserByCredentials {
  email: string;
  password: string;
}

export const selectUserByCredentialsSchema = z
  .object({
    email: z.string().nonempty().email().catch(catchZod),
    password: z.string().nonempty().catch(catchZod),
  })
  .catch(catchZod);
