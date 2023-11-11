import { Container } from 'inversify';
import { ALGORITHM_REGISTRY_MOCK } from './algorithm.registry';
import { mockArgonAlgorithm } from './hash/argon/argon.algorithm';
import { mockCryptoAlgorithm } from './crypto/crypto.algorithm';
import { CRYPTO_MODULE_MOCK } from '@test/mock/module/crypto/crypto.module';
import { ARGON_MODULE_MOCK } from '@test/mock/module/argon/argon.module';

const MODULE = new Container({
  autoBindInjectable: true,
});

export const ALGORITHM_MODULE_MOCK = Container.merge(
  MODULE,
  CRYPTO_MODULE_MOCK,
  ARGON_MODULE_MOCK,
);

ALGORITHM_MODULE_MOCK.bind(ALGORITHM_REGISTRY_MOCK.IV.CRYPTO).toDynamicValue(
  mockCryptoAlgorithm,
);
ALGORITHM_MODULE_MOCK.bind(
  ALGORITHM_REGISTRY_MOCK.HASH.ARGON[2],
).toDynamicValue(mockArgonAlgorithm);
