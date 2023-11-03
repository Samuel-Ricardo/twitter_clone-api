import { ILikeDTO } from '@Like';
import { ILikeCypher } from '@Like/cypher/like.cypher';
import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export class LikeCypher implements ILikeCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cypher: ICryptographer,
  ) {}

  encryptLike(like: ILikeDTO): string {
    return this.cypher.encryptIV(JSON.stringify(like));
  }
}
