import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';

export interface ICryptographyIVAlgotihm {
  encryptIV(word: string): IEncriptedIV | Promise<IEncriptedIV>;
  decryptIV(word: IEncriptedIV): string | Promise<string>;
}
