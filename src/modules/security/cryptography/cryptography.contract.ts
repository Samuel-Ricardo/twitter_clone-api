export interface ICryptographer {
  hash(plain: string): Promise<string>;

  compareHash(plain: string, hash: string): Promise<boolean>;

  encryptIV(plain: string): string;

  decryptIV(encrypted: string): string;
}
