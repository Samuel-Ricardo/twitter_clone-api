import { ICryptographyIVAlgotihm } from '../cryptography.algorithm';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

import cryptoLib from 'node:crypto';
import { ENV } from '@env';

@injectable()
export class Crypto implements ICryptographyIVAlgotihm {
  protected readonly _breakpoint = ENV.SECURITY.CRYPTOGRAPHY.BREAKPOINT;
  protected readonly _authBreakpoint =
    ENV.SECURITY.CRYPTOGRAPHY.AUTH.BREAKPOINT;
  protected readonly _ivBreakpoint = ENV.SECURITY.CRYPTOGRAPHY.IV.BREAKPOINT;

  constructor(
    @inject(MODULE.CRYPTO)
    protected readonly crypto: typeof cryptoLib,
  ) {}

  encryptIV(plain: string): string {
    const { cipher, iv } = this.cipher;

    let data = cipher.update(plain, 'utf8', 'hex');
    data += cipher.final('hex');
    data += this._breakpoint;

    data = this.injectAuthTag(data, cipher.getAuthTag());
    data = this.injectIV(data, iv);

    return data;
  }

  decryptIV(encrypted: string) {
    const { decipher, secret } = this.getDecipher(encrypted);

    let data = decipher.update(secret, 'hex', 'utf8');
    data += decipher.final('utf8');

    return data;
  }

  protected get cipher() {
    const iv = this.initialVector;
    return {
      cipher: this.crypto.createCipheriv(
        ENV.SECURITY.CRYPTOGRAPHY.ALGORITHM,
        ENV.SECURITY.CRYPTOGRAPHY.KEY,
        iv,
      ) as cryptoLib.CipherGCM,
      iv,
    };
  }

  protected getDecipher(encrypted: string) {
    const iv = this.extractIV(encrypted);
    const authTag = this.getAuthTag(encrypted);

    const decipher = this.crypto.createDecipheriv(
      ENV.SECURITY.CRYPTOGRAPHY.ALGORITHM,
      ENV.SECURITY.CRYPTOGRAPHY.KEY,
      iv,
    ) as cryptoLib.DecipherGCM;

    decipher.setAuthTag(authTag);

    return {
      decipher,
      authTag,
      iv,
      secret: this.extractSecret(encrypted),
    };
  }

  get initialVector() {
    return this.crypto.randomBytes(32);
  }
}
