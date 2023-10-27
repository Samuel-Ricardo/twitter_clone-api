export interface IHashAlgorithm {
  hash(plain: string): Promise<string>;
  compareHash(plain: string, hash: string): Promise<boolean>;

  injectSalt(hash: string, salt: Buffer): string;
  extractSalt(hash: string): Buffer;

  extractHash(plain: string): string;
}
