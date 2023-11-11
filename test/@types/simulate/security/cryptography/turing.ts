import { DeepMockProxy } from 'jest-mock-extended';
import { Turing } from '../../../../../src/modules/security/cryptography/turing/turing.cryptographer';
import { ICryptographyIVAlgotihm } from '../../../../../src/modules/security/cryptography/algorithm/cryptography.algorithm';
import { IHashAlgorithm } from '../../../../../src/modules/security/cryptography/algorithm/hash/hash.algorithm';

export interface ISimulateTuring {
  turing: Turing;
  cryptoAlgorithm: DeepMockProxy<ICryptographyIVAlgotihm>;
  hashAlgorithm: DeepMockProxy<IHashAlgorithm>;
}
