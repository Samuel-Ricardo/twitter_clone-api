import { IUserDTO } from '@User/DTO/user.dto';
import { UserCypherAccess } from '@User/cypher/cypher.access';

export class EncryptUserBeforeSendPolicy extends UserCypherAccess {
  execute(user: IUserDTO) {
    return this._cypher.encryptUser(user);
  }
}
