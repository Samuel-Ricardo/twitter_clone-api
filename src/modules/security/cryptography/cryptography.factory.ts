import { CRYPTOGRAPHY_ALGORITHM_FACTORY as ALGORITHM } from './algorithm/algorithm.factory';
import { CRYPTOGRAPHY_MODULE } from './cryptography.module';
import { CRYPTOGRAPHY_REGISTRY } from './cryptography.registry';
import { Turing } from './turing/turing.cryptographer';

export const CRYPTOGRAPHY_FACTORY = {
  ALGORITHM,
  TURING: () => CRYPTOGRAPHY_MODULE.get<Turing>(CRYPTOGRAPHY_REGISTRY.TURING),
};
