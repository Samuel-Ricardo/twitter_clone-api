import { Container } from 'inversify';
import { ALGORITHM_REGISTRY_MOCK } from './algorithm.registry';
import { mockArgonAlgorithm } from './hash/argon/argon.algorithm';
import { mockCryptoAlgorithm } from './crypto/crypto.algorithm';

export const ALGORITHM_MODULE_MOCK = new Container({
  autoBindInjectable: true,
});

ALGORITHM_MODULE_MOCK.bind(ALGORITHM_REGISTRY_MOCK.IV.CRYPTO).toDynamicValue(
  mockCryptoAlgorithm,
);
ALGORITHM_MODULE_MOCK.bind(
  ALGORITHM_REGISTRY_MOCK.HASH.ARGON[2],
).toDynamicValue(mockArgonAlgorithm);
