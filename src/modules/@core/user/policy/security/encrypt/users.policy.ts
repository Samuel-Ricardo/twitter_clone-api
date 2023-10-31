import { UserCypherAccess } from '@User/cypher/cypher.access';
import { User } from '../../../user.entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptUserListBeforeSendPolicy extends UserCypherAccess {
  execute(users: User[]) {
    return this._cypher.encryptUsers(users.map((user) => user.toStruct()));
  }
}
