import { injectable } from 'inversify';
import { ICommentCypher } from '../../@core/comment/cypher/comment.cypher';
import { CryptographerAccess } from '../cypher.access';

@injectable()
export class CommentCypher
  extends CryptographerAccess
  implements ICommentCypher
{
  encryptComment(comment: any): string {
    throw new Error('Method not implemented.');
  }

  encryptComments(comments: any): string {
    throw new Error('Method not implemented.');
  }

  decryptComment(comment: string): any {
    throw new Error('Method not implemented.');
  }

  decryptComments(comments: string): any {
    throw new Error('Method not implemented.');
  }
}
