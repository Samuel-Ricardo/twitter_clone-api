export interface IHashAlgorithm {
  hash(word: string): string | Promise<string>;
  compareHash(word: string, hash: string): boolean | Promise<boolean>;
}
