import { MockFactory } from '@test/mock';
import { ISimulateCryptoAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/crypto';
import { Crypto } from '../../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';
import {
  AUTH_TAG,
  CIPHERIV,
  DECIPHERIV,
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

  it('[UNIT] | Should: be able to => [ENCRYPT]', async () => {
    const cipheriv = CIPHERIV;
    const tag = AUTH_TAG;
    const iv = () => INITIAL_VECTOR;

    cipheriv.update.mockReturnValue('secret');
    cipheriv.final.mockReturnValue('');

    cipheriv.getAuthTag.mockReturnValue(tag);

    module.engine.randomBytes.mockImplementation(iv);
    module.engine.createCipheriv.mockReturnValue(cipheriv);

    const encrypted = module.crypto.encryptIV('data');

    const expected = SIMULATE_ENCRYPT('secret');

    expect(encrypted).not.toBe('data');
    expect(encrypted).toBe(expected);
  });

  it('[UNIT] | Should: be able to => [DECRYPT]', async () => {
    const encrypted = SIMULATE_ENCRYPT('secret');

    DECIPHERIV.update.mockReturnValue('data');
    DECIPHERIV.final.mockReturnValue('');

    module.engine.createDecipheriv.mockReturnValue(DECIPHERIV);

    const decrypted = module.crypto.decryptIV(encrypted);

    expect(decrypted).not.toBe(encrypted);
    expect(decrypted).toBe('data');
  });
});
