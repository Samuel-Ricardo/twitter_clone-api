import { CRYPTOGRAPHY_REGISTRY as CRYPTOGRAPHY } from './cryptography/cryptography.registry';

export const SECURITY_REGISTRY = {
  CRYPTOGRAPHY,
  TURING: Symbol.for('MODULE:SECURITY.CRYPTOGRAPHY.TURING'),
};
