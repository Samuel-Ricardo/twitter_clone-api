import { MockFactory } from '@test/mock';
import { ISimulateCryptoAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/crypto';
import { Crypto } from '../../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';
import {
  AUTH_TAG,
  CIPHERIV,
  INITIAL_VECTOR,
  SIMULATE_ENCRYPT,
} from '@test/mock/data/cypher/crypto';

describe('[CRYPTOGRAPHY] | ALGORITHM => [CRYPTO]', () => {
  let module: ISimulateCryptoAlgorithm;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.SECURITY.CRYPTOGRAPHY.ALGORITHM.SIMULATE.IV.CRYPTO();

    expect(module.engine).toBeDefined();
    expect(module.crypto).toBeInstanceOf(Crypto);
  });
});
