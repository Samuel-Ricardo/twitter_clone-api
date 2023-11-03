import { ILikeDTO } from '@Like/DTO';
import { LikeCypherAccess } from '@Like/cypher/cypher.access';
import { Like } from '@Like/entity';

export class EncryptLikeBeforeSendPolicy extends LikeCypherAccess {
  execute(like: ILikeDTO | Like) {
    return this.cypher.encryptLike(
      like instanceof Like ? like.toStruct() : like,
    );
  }
}
