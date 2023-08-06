import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IDeletePostDTO {
  id: string;
}

export const DeletePostSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
});
