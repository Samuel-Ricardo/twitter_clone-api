import dotnev from 'dotenv';

dotnev.config();
if (process.env.NODE_ENV === 'production') dotnev.config({ path: '.env.prod' });

export const ENV = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV,

  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  PORT: process.env.PORT || 3000,
};
