import { DeepMockProxy } from 'jest-mock-extended';
import { ALGORITHM_FACTORY_MOCK as ALGORITHM } from './algorithm/algorithm.factory';
import { CRYPTOGRAPHY_MODULE_MOCK } from './cryptography.module';
import { Turing } from '../../../../../src/modules/security/cryptography/turing/turing.cryptographer';
import { CRYPTOGRAPHY_REGISTRY_MOCK } from './cryptography.registry';
import { ISimulateTuring } from '@test/@types/simulate/security/cryptography/turing';

export const CRYPTOGRAPHY_FACTORY_MOCK = {
  ALGORITHM,
  TURING: () =>
    CRYPTOGRAPHY_MODULE_MOCK.get<DeepMockProxy<Turing>>(
      CRYPTOGRAPHY_REGISTRY_MOCK.TURING,
    ),
  SIMULATE: {
    TURING: () =>
      CRYPTOGRAPHY_MODULE_MOCK.get<ISimulateTuring>(
        CRYPTOGRAPHY_REGISTRY_MOCK.SIMULATE.TURING,
      ),
  },
};
