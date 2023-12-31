import { injectable } from 'inversify';
import { IFollowCypher } from '../../@core/follow/cypher/follow.cypher';
import { CryptographerAccess } from '../cypher.access';
import { IFollowDTO } from '../../@core/follow/DTO/follow.dto';

@injectable()
export class FollowCypher extends CryptographerAccess implements IFollowCypher {
  encryptFollow(follow: IFollowDTO) {
    return this.cryptographer.encryptIV(JSON.stringify(follow));
  }

  encryptFollowers(followers: IFollowDTO[]): string {
    return this.cryptographer.encryptIV(JSON.stringify(followers));
  }

  decryptFollow(follow: string): IFollowDTO {
    return JSON.parse(this.cryptographer.decryptIV(follow));
  }

  decryptFollowers(followers: string): IFollowDTO[] {
    return JSON.parse(this.cryptographer.decryptIV(followers));
  }
}
