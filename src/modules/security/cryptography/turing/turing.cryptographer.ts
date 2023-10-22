import { ICryptographer } from '../cryptography.contract';

export class TuringCryptographer implements ICryptographer {
  hash(word: string): string | Promise<string> {
    throw new Error('Method not implemented.');
  }
  compareHash(word: string, hash: string): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  encryptIV(word: string): IEncriptedIV | Promise<IEncriptedIV> {
    throw new Error('Method not implemented.');
  }
  decryptIV(word: IEncriptedIV): string | Promise<string> {
    throw new Error('Method not implemented.');
  }
}
