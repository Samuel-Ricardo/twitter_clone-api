import { Container } from 'inversify';
import { ALGORITHM_MODULE_MOCK } from './algorithm/algorithm.module';
import { CRYPTOGRAPHY_REGISTRY_MOCK } from './cryptography.registry';
import { mockTuring, simulateTuring } from './turing/turing.cryptographer';

const MODULE = new Container({ autoBindInjectable: true });

export const CRYPTOGRAPHY_MODULE_MOCK = Container.merge(
  MODULE,
  ALGORITHM_MODULE_MOCK,
);

CRYPTOGRAPHY_MODULE_MOCK.bind(CRYPTOGRAPHY_REGISTRY_MOCK.TURING).toDynamicValue(
  mockTuring,
);

CRYPTOGRAPHY_MODULE_MOCK.bind(
  CRYPTOGRAPHY_REGISTRY_MOCK.SIMULATE.TURING,
).toDynamicValue(simulateTuring);
