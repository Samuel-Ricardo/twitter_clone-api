import { ILikeDTO } from '@Like/DTO';
import { LikeCypherAccess } from '@Like/cypher/cypher.access';
import { Like } from '@Like/entity';
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
