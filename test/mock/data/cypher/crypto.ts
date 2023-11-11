import { ENV } from '@env';
import { mockDeep } from 'jest-mock-extended';
import { CipherGCM, DecipherGCM } from 'node:crypto';

export const BREAKPOINT = ENV.SECURITY.CRYPTOGRAPHY.BREAKPOINT;
