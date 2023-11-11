export const ALGORITHM_REGISTRY_MOCK = {
  SIMULATE: {
    HASH: {
      ARGON: {
        2: Symbol.for(
          'SIMULATE::MODULE:SECURITY:CRYPTOGRAPHY:ALGORITHM:ARGON2',
        ),
      },
    },
    IV: {
      CRYPTO: Symbol.for(
        'SIMULATE::MODULE:SECURITY:CRYPTOGRAPHY:ALGORITHM:CRYPTO',
      ),
    },
  },
  HASH: {
    ARGON: {
      2: Symbol.for('MOCK::MODULE:SECURITY:CRYPTOGRAPHY:ALGORITHM:ARGON2'),
    },
  },
  IV: {
    CRYPTO: Symbol.for('MOCK::MODULE:SECURITY:CRYPTOGRAPHY:ALGORITHM:CRYPTO'),
  },
};
