export interface ICryptographer {
  hash(plain: string): Promise<string>;

  compareHash(plain: string, hash: string): Promise<string>;

  encryptIV(plain: string): string;

  decryptIV(encrypted: string): string;
}
