import { ENV } from '@env';
import { mockDeep } from 'jest-mock-extended';
import { CipherGCM, DecipherGCM } from 'node:crypto';

export const BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.BREAKPOINT;
export const AUTH_BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.AUTH.BREAKPOINT;
export const IV_BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.IV.BREAKPOINT;

export const CIPHERIV = mockDeep<CipherGCM>();
