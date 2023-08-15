import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const CountFollowersSchema = z
  .object({
    followingId: z.string().catch(catchZod),
  })
  .catch(catchZod);
