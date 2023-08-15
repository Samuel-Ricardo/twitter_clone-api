import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const CreateFollowSchema = z
  .object({
    followerId: z.string().catch(catchZod),
    followingId: z.string().catch(catchZod),
  })
  .catch(catchZod);
