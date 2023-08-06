import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface SelectUserByIdDTO {
  id: string;
}

export const SelectUserByIdSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
});
