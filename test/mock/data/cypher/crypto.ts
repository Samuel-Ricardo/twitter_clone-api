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
