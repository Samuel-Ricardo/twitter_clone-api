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

  protected injectAuthTag(secret: string, authTag: Buffer) {
    return Crypto.injectDataInSecret(
      secret,
      authTag.toString('hex'),
      this._authBreakpoint,
    );
  }

  protected injectIV(secret: string, iv: Buffer) {
    return Crypto.injectDataInSecret(
      secret,
      iv.toString('hex'),
      this._ivBreakpoint,
    );
  }

  protected getAuthTag(secret: string) {
    return Buffer.from(
      Crypto.getDataFromSecret(secret, this._authBreakpoint),
      'hex',
    );
  }

  protected extractIV(data: string) {
    return Buffer.from(
      Crypto.getDataFromSecret(data, this._ivBreakpoint),
      'hex',
    );
  }

  protected extractSecret(data: string) {
    return data.split(this._breakpoint)[0];
  }

  protected static injectDataInSecret(
    secret: string,
    data: string,
    breakpoint: string,
  ) {
    return secret.concat(breakpoint, data, breakpoint);
  }
}
