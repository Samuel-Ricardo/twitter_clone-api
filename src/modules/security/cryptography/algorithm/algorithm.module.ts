import { Container } from 'inversify';
import { CRYPTOGRAPHY_ALGORITHM_REGISTRY } from './algorithm.registry';
import { Argon2 } from './hash/argon/argon.algorithm';
import { Crypto } from './crypto/crypto.algorithm';
import getDecorators from 'inversify-inject-decorators';

export const CRYPTOGRAPHY_ALGORITHM_MODULE = new Container({
  autoBindInjectable: true,
});

CRYPTOGRAPHY_ALGORITHM_MODULE.bind(
  CRYPTOGRAPHY_ALGORITHM_REGISTRY.HASH.ARGON[2],
).to(Argon2);

CRYPTOGRAPHY_ALGORITHM_MODULE.bind(
  CRYPTOGRAPHY_ALGORITHM_REGISTRY.IV.CRYPTO,
).to(Crypto);

export const { lazyInject: injectAlgorithm } = getDecorators(
  CRYPTOGRAPHY_ALGORITHM_MODULE,
);
