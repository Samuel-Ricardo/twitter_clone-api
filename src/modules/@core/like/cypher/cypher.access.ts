import { inject, injectable } from 'inversify';
import { ILikeCypher } from './like.cypher';
import { MODULE } from '@modules/app.registry';

@injectable()
export abstract class LikeCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.LIKE)
    protected readonly cypher: ILikeCypher,
  ) {}
}
