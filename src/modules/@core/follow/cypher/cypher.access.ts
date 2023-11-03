import { inject, injectable } from 'inversify';
import { IFollowCypher } from './follow.cypher';
import { MODULE } from '@modules/app.registry';

@injectable()
export abstract class FollowCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.FOLLOW)
    protected readonly cypher: IFollowCypher,
  ) {}
}
