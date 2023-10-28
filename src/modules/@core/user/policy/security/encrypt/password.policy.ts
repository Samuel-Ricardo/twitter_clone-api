import { UserCypherAccess } from '@User/cypher/cypher.access';
import { injectable } from 'inversify';

@injectable()
export class HashPasswrodBeforeSave extends UserCypherAccess {
  async execute(password: string) {
    return await this._cypher.hashPassword(password);
  }
}
