import { InvalidDataError } from '@modules/error/data';
import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface CreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const CreateUserSchema = z.object({
  name: z.string().min(3).nonempty().catch(catchZod),
  username: z.string().min(1),
  email: z.string().email().catch(catchZod),
  password: z.string().nonempty().catch(catchZod),
});
