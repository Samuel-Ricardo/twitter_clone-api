import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '../security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export abstract class CryptographerAccess {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cryptographer: ICryptographer,
  ) {}
}
