import { ARGON_MODULE } from './argon.module';
import { ARGON_REGISTRY } from './argon.registry';

import argon2 from 'argon2';

export const ARGON_FACTORY = {
  2: () => ARGON_MODULE.get<typeof argon2>(ARGON_REGISTRY[2]),
};
