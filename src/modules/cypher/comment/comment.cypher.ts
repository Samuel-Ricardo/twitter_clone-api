import { injectable } from 'inversify';
import { ICommentCypher } from '../../@core/comment/cypher/comment.cypher';
import { CryptographerAccess } from '../cypher.access';
import { ICommentDTO } from '../../@core/comment/DTO/comment.dto';

@injectable()
export class CommentCypher
  extends CryptographerAccess
  implements ICommentCypher
{
  encryptComment(comment: ICommentDTO): string {
    return this.cryptographer.encryptIV(JSON.stringify(comment));
  }

  encryptComments(comments: ICommentDTO[]): string {
    return this.cryptographer.encryptIV(JSON.stringify(comments));
  }

  decryptComment(comment: string): any {
    throw new Error('Method not implemented.');
  }

  decryptComments(comments: string): any {
    throw new Error('Method not implemented.');
  }
}
