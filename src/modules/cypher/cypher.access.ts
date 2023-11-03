import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { injectable } from 'inversify';

@injectable()
export abstract class CryptographerAccess {
  constructor(protected readonly cryptographer: ICryptographer) {}
}
