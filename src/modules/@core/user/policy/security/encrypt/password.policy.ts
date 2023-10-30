import { UserCypherAccess } from '../../../cypher/cypher.access';
import { injectable } from 'inversify';

@injectable()
export class HashPasswrodBeforeSavePolicy extends UserCypherAccess {
  async execute(password: string) {
    return await this._cypher.hashPassword(password);
  }
}
