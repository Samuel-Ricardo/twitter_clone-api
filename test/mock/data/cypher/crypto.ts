import { ENV } from '@env';
import { mockDeep } from 'jest-mock-extended';
import { CipherGCM, DecipherGCM } from 'node:crypto';

export const BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.BREAKPOINT;
export const AUTH_BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.AUTH.BREAKPOINT;
export const IV_BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.IV.BREAKPOINT;

export const CIPHERIV = mockDeep<CipherGCM>();
export const DECIPHER = mockDeep<DecipherGCM>();
export const AUTH_TAG = Buffer.from('auth_tag', 'utf8');
export const INITIAL_VECTOR = Buffer.from('initial_vector', 'utf8');

export const SIMULATE_ENCRYPT = (data: string) => {
  return data
    .concat(BREAKPOINT)
    .concat(AUTH_BREAKPOINT)
    .concat(AUTH_TAG.toString('hex'))
    .concat(AUTH_BREAKPOINT)
    .concat(IV_BREAKPOINT)
    .concat(INITIAL_VECTOR.toString('hex'))
    .concat(IV_BREAKPOINT);
};
