import { injectCrypto } from '@modules/crypto/crypto.module';
import { ICryptographyIVAlgotihm } from '../cryptography.algorithm';
import { MODULE } from '@modules/app.registry';
import { injectable } from 'inversify';

import crypto from 'node:crypto';
import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import { ENV } from '@env';

@injectable()
export class Crypto implements ICryptographyIVAlgotihm {
  @injectCrypto(MODULE.CRYPTO)
  protected readonly crypto: typeof crypto;

  get cipher() {
    const iv = this.initialVector;
    return {
      cipher: this.crypto.createCipheriv(
        ENV.SECURITY.CRYPTOGRAPHY.ALGORITHM,
        ENV.SECURITY.CRYPTOGRAPHY.KEY,
        iv,
      ),
      iv,
    };
  }

  get initialVector() {
    return this.crypto.randomBytes(32);
  }
}
