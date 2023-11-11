import { Argon2 } from '../../../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import { mockDeep } from 'jest-mock-extended';

export const mockArgonAlgorithm = () => mockDeep<Argon2>();
