import dotnev from 'dotenv';

dotnev.config();
if (process.env.NODE_ENV === 'production') dotnev.config({ path: '.env.prod' });

export const ENV = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV,

  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  PORT: process.env.PORT || 3000,

  AUTH: {
    TOKEN: {
      SECRET: process.env.AUTH_TOKEN_SECRET || '',
    },
  },

  SECURITY: {
    CRYPTOGRAPHY: {
      ALGORITHM: process.env.SECURITY_CRYPTOGRAPHY_ALGORITHM || '',
      KEY: process.env.SECURITY_CRYPTOGRAPHY_KEY || '',
      BREAKPOINT: process.env.SECURITY_CRYPTOGRAPHY_BREAKPOINT || '',
      AUTH: {
        BREAKPOINT: process.env.SECURITY_CRYPTOGRAPHY_AUTH_BREAKPOINT || '',
      },
      IV: {
        BREAKPOINT: process.env.SECURITY_CRYPTOGRAPHY_IV_BREAKPOINT || '',
      },
      HASH: {
        BREAKPOINT: process.env.SECURITY_CRYPTOGRAPHY_HASH_BREAKPOINT || '',
        SALT: {
          BREAKPOINT: process.env.SECURITY_CRYPTOGRAPHY_SALT_BREAKPOINT || '',
        },
      },
    },
  },
};
