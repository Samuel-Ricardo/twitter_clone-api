import { mockDeep } from 'jest-mock-extended';
import { Crypto } from '../../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';

export const mockCryptoAlgorithm = () => mockDeep<Crypto>();
