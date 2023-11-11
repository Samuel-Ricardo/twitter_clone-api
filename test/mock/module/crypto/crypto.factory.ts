import { CRYPTO_MODULE_MOCK } from './crypto.module';
import crypto from 'node:crypto';
import { CRYPTO_REGISTRY_MOCK } from './crypto.registry';
import { DeepMockProxy } from 'jest-mock-extended';

export const CRYPTO_FACTORY_MOCK = {
  CRYPTO: CRYPTO_MODULE_MOCK.get<DeepMockProxy<typeof crypto>>(
    CRYPTO_REGISTRY_MOCK.CRYPTO,
  ),
};
