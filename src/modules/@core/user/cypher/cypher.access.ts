import { inject, injectable } from 'inversify';
import { IUserCypher } from './user.cypher';
import { MODULE } from '@modules/app.registry';

@injectable()
export class UserCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.USER)
    protected readonly _cypher: IUserCypher,
  ) {}
}
