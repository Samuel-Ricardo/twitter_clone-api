import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export const FollowSchema = z
  .object({
    id: z.string().catch(catchZod),
    followerId: z.string().catch(catchZod),
    followingId: z.string().catch(catchZod),
    createdAt: z.date().catch(catchZod),
  })
  .catch(catchZod);
