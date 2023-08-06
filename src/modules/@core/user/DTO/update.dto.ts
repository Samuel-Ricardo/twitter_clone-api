import { InvalidDataError } from '@modules/error/data';
import { catchZod } from '@modules/util/validator';
import { injectable } from 'inversify';
import { z } from 'zod';

export interface UpdateUserDTO {
  id: string;
  name?: string;
  username?: string;
  bio?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  sessionToken?: string;
  hasNotifications?: boolean;
  emailVerified?: Date;
  image?: string;
  coverImage?: string;
  profileImage?: string;
}

export const UpdateUserSchema = z.object({
  id: z.string().nonempty().catch(catchZod),
  name: z.string().optional().catch(catchZod),
  username: z.string().optional().catch(catchZod),
  bio: z.string().max(255).optional().catch(catchZod),
  email: z.string().email().optional().catch(catchZod),
  password: z.string().optional().catch(catchZod),
  createdAt: z.date().optional().catch(catchZod),
  updatedAt: z.date().optional().catch(catchZod),
  sessionToken: z.string().optional().catch(catchZod),
  hasNotifications: z.boolean().optional().catch(catchZod),
  emailVerified: z.date().optional().catch(catchZod),
  image: z.string().optional().catch(catchZod),
  coverImage: z.string().optional().catch(catchZod),
  profileImage: z.string().optional().catch(catchZod),
});
