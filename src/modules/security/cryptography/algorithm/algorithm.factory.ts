import { CRYPTOGRAPHY_ALGORITHM_MODULE } from './algorithm.module';
import { CRYPTOGRAPHY_ALGORITHM_REGISTRY } from './algorithm.registry';
import { Argon2 } from './hash/argon/argon.algorithm';
import { Crypto } from './crypto/crypto.algorithm';

export const CRYPTOGRAPHY_ALGORITHM_FACTORY = {
  HASH: {
    ARGON: {
      2: () =>
        CRYPTOGRAPHY_ALGORITHM_MODULE.get<Argon2>(
          CRYPTOGRAPHY_ALGORITHM_REGISTRY.HASH.ARGON[2],
        ),
    },
  },
  IV: {
    CRYPTO: () =>
      CRYPTOGRAPHY_ALGORITHM_MODULE.get<Crypto>(
        CRYPTOGRAPHY_ALGORITHM_REGISTRY.IV.CRYPTO,
      ),
  },
};
