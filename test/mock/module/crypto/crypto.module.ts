import { Container } from 'inversify';
import { CRYPTO_REGISTRY_MOCK } from './crypto.registry';
import crypto from 'node:crypto';
import { mockDeep } from 'jest-mock-extended';

export const CRYPTO_MODULE_MOCK = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

CRYPTO_MODULE_MOCK.bind(CRYPTO_REGISTRY_MOCK.CRYPTO).toDynamicValue(() =>
  mockDeep<typeof crypto>(),
);
