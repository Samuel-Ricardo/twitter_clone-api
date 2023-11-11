import { DeepMockProxy } from 'jest-mock-extended';
import { Argon2 } from '../../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import argonLib from 'argon2';

export interface ISimulateArgonAlgorithm {
  argon: Argon2;
  engine: DeepMockProxy<typeof argonLib>;
}
