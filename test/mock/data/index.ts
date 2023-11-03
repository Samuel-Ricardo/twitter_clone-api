import { MODULES } from '@modules';

export * from './user';

export const ENCRYPTED_DATA = 'encrypted_data';

export const ENCRYPTED = (data: string) =>
  MODULES.SECURITY.CRYPTOGRAPHY.TURING().encryptIV(data);
export const JENCRYPTED = (data: any) =>
  MODULES.SECURITY.CRYPTOGRAPHY.TURING().encryptIV(JSON.stringify(data));
export const DECRYPTED = (data: string) =>
  MODULES.SECURITY.CRYPTOGRAPHY.TURING().decryptIV(data);
export const JDECRYPTED = <T>(data: string) =>
  JSON.parse(MODULES.SECURITY.CRYPTOGRAPHY.TURING().decryptIV(data)) as T;
