import { Container } from 'inversify';
import { CRYPTOGRAPHY_ALGORITHM_REGISTRY } from './algorithm.registry';
import { Argon2 } from './hash/argon/argon.algorithm';
import { Crypto } from './crypto/crypto.algorithm';
import getDecorators from 'inversify-inject-decorators';
import { CRYPTO_MODULE } from '../../../crypto/crypto.module';
import { ARGON_MODULE } from '../../../argon/argon.module';

const MODULE = new Container({
  autoBindInjectable: true,
});

export const CRYPTOGRAPHY_ALGORITHM_MODULE = Container.merge(
  MODULE,
  CRYPTO_MODULE,
  ARGON_MODULE,
);

CRYPTOGRAPHY_ALGORITHM_MODULE.bind(
  CRYPTOGRAPHY_ALGORITHM_REGISTRY.HASH.ARGON[2],
).to(Argon2);

CRYPTOGRAPHY_ALGORITHM_MODULE.bind(
  CRYPTOGRAPHY_ALGORITHM_REGISTRY.IV.CRYPTO,
).to(Crypto);

export const { lazyInject: injectAlgorithm } = getDecorators(
  CRYPTOGRAPHY_ALGORITHM_MODULE,
);
