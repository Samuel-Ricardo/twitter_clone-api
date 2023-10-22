import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';

export interface ICryptographer {
  hash(word: string): string | Promise<string>;
  compareHash(word: string, hash: string): boolean | Promise<boolean>;
  encryptIV(word: string): IEncriptedIV | Promise<IEncriptedIV>;
  decryptIV(word: IEncriptedIV): string | Promise<string>;
}
