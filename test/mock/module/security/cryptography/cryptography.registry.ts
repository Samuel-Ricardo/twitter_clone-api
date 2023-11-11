import { ALGORITHM_REGISTRY_MOCK as ALGORITHM } from './algorithm/algorithm.registry';

export const CRYPTOGRAPHY_REGISTRY_MOCK = {
  ALGORITHM,
  TURING: Symbol.for('MODULE:SECURITY.CRYPTOGRAPHY.TURING'),
};
