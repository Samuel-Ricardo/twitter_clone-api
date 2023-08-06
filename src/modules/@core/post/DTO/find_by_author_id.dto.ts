import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IFindPostByAuthorIdDTO {
  id: string;
}

export const FindPostByAuthorIdSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
});
