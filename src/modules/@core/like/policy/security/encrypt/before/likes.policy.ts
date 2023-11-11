import { ILikeDTO } from '../../../../DTO';
import { LikeCypherAccess } from '../../../../cypher/cypher.access';
import { Like } from '../../../../entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptLikeListBeforeSendPolicy extends LikeCypherAccess {
  execute(like: ILikeDTO[] | Like[]) {
    const likes = (
      like[0] instanceof Like ? like.map((l) => (l as Like).toStruct()) : like
    ) as ILikeDTO[];
    return this.cypher.encryptLikes(likes);
  }
}
