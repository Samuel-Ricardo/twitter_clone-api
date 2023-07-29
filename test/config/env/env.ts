import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

export const ENV = {
  ...process.env,

  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  PORT: process.env.PORT || 3000,
  DB: {
    URL: process.env.DATABASE_URL as string,
  },
};
