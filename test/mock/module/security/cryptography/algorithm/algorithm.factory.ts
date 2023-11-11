import { DeepMockProxy } from 'jest-mock-extended';
import { ALGORITHM_MODULE_MOCK } from './algorithm.module';
import { Argon2 } from '../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import { Crypto } from '../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';
import { ALGORITHM_REGISTRY_MOCK } from './algorithm.registry';
import { ISimulateArgonAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/hash/argon';
import { ISimulateCryptoAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/crypto';

export const ALGORITHM_FACTORY_MOCK = {
  SIMULATE: {
    HASH: {
      ARGON: {
        2: () =>
          ALGORITHM_MODULE_MOCK.get<ISimulateArgonAlgorithm>(
            ALGORITHM_REGISTRY_MOCK.HASH.ARGON[2],
          ),
      },
    },
    IV: {
      CRYPTO: () =>
        ALGORITHM_MODULE_MOCK.get<ISimulateCryptoAlgorithm>(
          ALGORITHM_REGISTRY_MOCK.IV.CRYPTO,
        ),
    },
  },
  HASH: {
    ARGON: {
      2: () =>
        ALGORITHM_MODULE_MOCK.get<DeepMockProxy<Argon2>>(
          ALGORITHM_REGISTRY_MOCK.HASH.ARGON[2],
        ),
    },
  },
  IV: {
    CRYPTO: () =>
      ALGORITHM_MODULE_MOCK.get<DeepMockProxy<Crypto>>(
        ALGORITHM_REGISTRY_MOCK.IV.CRYPTO,
      ),
  },
};
