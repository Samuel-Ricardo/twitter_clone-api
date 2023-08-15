import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const GetFollowersSchema = z
  .object({
    followingId: z.string().catch(catchZod),
  })
  .catch(catchZod);
