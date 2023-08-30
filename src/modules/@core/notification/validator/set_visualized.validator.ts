import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const SetVisualizedSchema = z
  .object({
    id: z.string().catch(catchZod),
    visualizedAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
