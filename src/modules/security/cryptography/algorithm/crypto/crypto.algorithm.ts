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
}
