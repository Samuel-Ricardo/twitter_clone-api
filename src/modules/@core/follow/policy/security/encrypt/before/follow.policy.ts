import { IFollowDTO } from '../../../../DTO/follow.dto';
import { FollowCypherAccess } from '../../../../cypher/cypher.access';
import { injectable } from 'inversify';
import { Follow } from '../../../../entity/follow.entity';

@injectable()
export class EncryptFollowBeforeSendPolicy extends FollowCypherAccess {
  execute(follow: IFollowDTO | Follow) {
    return this.cypher.encryptFollow(
      follow instanceof Follow ? follow.toStruct() : follow,
    );
  }
}
