import { ILikeDTO } from '../../../../DTO';
import { LikeCypherAccess } from '../../../../cypher/cypher.access';
import { Like } from '../../../../entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptLikeBeforeSendPolicy extends LikeCypherAccess {
  execute(like: ILikeDTO | Like) {
    return this.cypher.encryptLike(
      like instanceof Like ? like.toStruct() : like,
    );
  }
}
