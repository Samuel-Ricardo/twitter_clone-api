import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IFindPostByIdDTO {
  id: string;
}

export const FindPostByIdSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
});
