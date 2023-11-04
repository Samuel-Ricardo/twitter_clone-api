import { IFollowDTO } from '@Core/follow/DTO';
import { FollowCypherAccess } from '../../../../cypher/cypher.access';
import { injectable } from 'inversify';
import { Follow } from '../../../../entity/follow.entity';

@injectable()
export class EncryptFollowListBeforeSendPolicy extends FollowCypherAccess {
  execute(followers: IFollowDTO[] | Follow[]) {
    const follows =
      followers[0] instanceof Follow
        ? followers.map((follow) => (follow as Follow).toStruct())
        : followers;
    return this.cypher.encryptFollowers(follows);
  }
}
