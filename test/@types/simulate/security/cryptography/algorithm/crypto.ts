import { DeepMockProxy } from 'jest-mock-extended';
import { Crypto } from '../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';
import cryptoLib from 'node:crypto';

export interface ISimulateCryptoAlgorithm {
  crypto: Crypto;
  engine: DeepMockProxy<typeof cryptoLib>;
}
