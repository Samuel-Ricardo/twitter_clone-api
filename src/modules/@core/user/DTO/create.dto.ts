import { InvalidDataError } from '@modules/error/data';
import { z } from 'zod';

export interface CreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(3)
    .nonempty()
    .catch((zod) => {
      throw new InvalidDataError(JSON.parse(zod.error.message));
    }),
  username: z.string().min(1),
  email: z
    .string()
    .email()
    .catch((zod) => {
      throw new InvalidDataError(JSON.parse(zod.error.message));
    }),
  password: z
    .string()
    .nonempty()
    .catch((zod) => {
      throw new InvalidDataError(JSON.parse(zod.error.message));
    }),
});
