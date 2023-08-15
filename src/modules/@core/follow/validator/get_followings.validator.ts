import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const GetFollowingsSchema = z
  .object({
    followerId: z.string().catch(catchZod),
  })
  .catch(catchZod);
