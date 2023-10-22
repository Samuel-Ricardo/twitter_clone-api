import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import { ICryptographer } from '../cryptography.contract';

import { inject, injectable } from 'inversify';
import { ICryptographyIVAlgotihm } from '../algorithm/cryptography.algorithm';
import { IHashAlgorithm } from '../algorithm/hash/hash.algorithm';
import { MODULE } from '@modules/app.registry';

@injectable()
export class Turing implements ICryptographer {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.ALGORITHM.IV.CRYPTO)
    protected readonly crypto: ICryptographyIVAlgotihm,
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.ALGORITHM.HASH.ARGON[2])
    protected readonly hashAlgorithm: IHashAlgorithm,
  ) {}

  hash(plain: string) {
    return this.hashAlgorithm.hash(plain);
  }

  compareHash(plain: string, hash: string) {
    return this.hashAlgorithm.compareHash(plain, hash);
  }

  encryptIV(plain: string): IEncriptedIV | Promise<IEncriptedIV> {
    return this.crypto.encryptIV(plain);
  }
}
