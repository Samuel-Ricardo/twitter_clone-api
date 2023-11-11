import { DeepMockProxy } from 'jest-mock-extended';
import { ALGORITHM_FACTORY_MOCK as ALGORITHM } from './algorithm/algorithm.factory';
import { CRYPTOGRAPHY_MODULE_MOCK } from './cryptography.module';
import { Turing } from '../../../../../src/modules/security/cryptography/turing/turing.cryptographer';
import { CRYPTOGRAPHY_REGISTRY_MOCK } from './cryptography.registry';

export const CRYPTOGRAPHY_FACTORY_MOCK = {
  ALGORITHM,
  TURING: () =>
    CRYPTOGRAPHY_MODULE_MOCK.get<DeepMockProxy<Turing>>(
      CRYPTOGRAPHY_REGISTRY_MOCK.TURING,
    ),
};
