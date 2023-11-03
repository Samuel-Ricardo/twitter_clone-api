import { ILikeDTO } from '@Like/DTO';
import { LikeCypherAccess } from '@Like/cypher/cypher.access';
import { Like } from '@Like/entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptLikeBeforeSendPolicy extends LikeCypherAccess {
  execute(like: ILikeDTO | Like) {
    return this.cypher.encryptLike(
      like instanceof Like ? like.toStruct() : like,
    );
  }
}
