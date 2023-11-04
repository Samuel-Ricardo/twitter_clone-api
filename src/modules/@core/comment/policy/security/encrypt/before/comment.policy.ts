import { CommentCypherAccess } from '../../../../cypher/cypher.access';
import { ICommentDTO } from '../../../../DTO/comment.dto';
import { Comment } from '../../../../entity/comment.entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptCommentBeforeSendPolicy extends CommentCypherAccess {
  execute(comment: ICommentDTO | Comment) {
    return this.cypher.encryptComment(
      comment instanceof Comment ? comment.toStruct() : comment,
    );
  }
}
