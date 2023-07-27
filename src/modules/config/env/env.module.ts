import dotnev from 'dotenv';
dotnev.config();

export const ENV = {
  ...process.env,
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
};
