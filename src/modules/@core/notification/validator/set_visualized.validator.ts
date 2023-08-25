import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const SetVisualizedSchema = z
  .object({
    id: z.string(),
    visualizedAt: z.date(),
  })
  .catch(catchZod);
