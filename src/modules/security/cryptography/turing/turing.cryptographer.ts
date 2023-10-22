import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import { ICryptographer } from '../cryptography.contract';

import { inject, injectable } from 'inversify';
import { injectCrypto } from '@modules/crypto/crypto.module';
import { injectArgon } from '@modules/argon/argon.module';

import crypto from 'crypto';
import argon2 from 'argon2';
import { ICryptographyIVAlgotihm } from '../algorithm/cryptography.algorithm';
import { IHashAlgorithm } from '../algorithm/hash/hash.algorithm';
import { MODULE } from '@modules/app.registry';

@injectable()
export class TuringCryptographer implements ICryptographer {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.ALGORITHM.IV.CRYPTO)
    protected readonly crypto: ICryptographyIVAlgotihm,
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.ALGORITHM.HASH.ARGON[2])
    protected readonly hashAlgorithm: IHashAlgorithm,
  ) {}

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
