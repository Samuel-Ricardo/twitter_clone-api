export interface ICryptographyIVAlgotihm {
  encryptIV(plain: string): string;
  decryptIV(encrypted: string): string;
}
