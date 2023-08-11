import { catchZod } from '@modules/util/validator';
import { z } from 'zod';

export interface IGetLikesOfUserDTO {
  id: string;
}
