import { CommentCypherAccess } from '../../../../cypher/cypher.access';
import { ICommentDTO } from '../../../../DTO/comment.dto';
import { Comment } from '../../../../entity/comment.entity';
import { injectable } from 'inversify';

@injectable()
export class EncryptCommentListBeforeSendPolicy extends CommentCypherAccess {
  execute(commentList: ICommentDTO[] | Comment[]) {
    const comments =
      commentList[0] instanceof Comment
        ? commentList.map((comment) => (comment as Comment).toStruct())
        : commentList;

    return this.cypher.encryptComments(comments);
  }
}
