import { DeepMockProxy } from 'jest-mock-extended';
import { ARGON_MODULE_MOCK } from './argon.module';
import { ARGON_REGISTRY_MOCK } from './argon.registry';

import argon2 from 'argon2';

export const ARGON_FACTORY_MOCK = {
  2: () =>
    ARGON_MODULE_MOCK.get<DeepMockProxy<typeof argon2>>(ARGON_REGISTRY_MOCK[2]),
};
