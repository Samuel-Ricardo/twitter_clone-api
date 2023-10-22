import { injectCrypto } from '@modules/crypto/crypto.module';
import { ICryptographyIVAlgotihm } from '../cryptography.algorithm';
import { MODULE } from '@modules/app.registry';
import { injectable } from 'inversify';

import crypto from 'node:crypto';

@injectable()
export class Crypto implements ICryptographyIVAlgotihm {
  @injectCrypto(MODULE.CRYPTO)
  protected readonly crypto: typeof crypto;
}
