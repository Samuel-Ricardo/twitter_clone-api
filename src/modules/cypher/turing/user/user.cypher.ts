import { IUserCypher } from '@User/cypher/user.cypher';
import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cryptographer: ICryptographer,
  ) {}

  async hashPassword(password: string) {
    return await this.cryptographer.hash(password);
  }
}
