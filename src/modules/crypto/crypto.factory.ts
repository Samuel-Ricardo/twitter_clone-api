import { CRYPTO_MODULE } from './crypto.module';
import crypto from 'node:crypto';
import { CRYPTO_REGISTRY } from './crypto.registry';

export const CRYPTO_FACTORY = {
  CRYPTO: CRYPTO_MODULE.get<typeof crypto>(CRYPTO_REGISTRY.CRYPTO),
};
