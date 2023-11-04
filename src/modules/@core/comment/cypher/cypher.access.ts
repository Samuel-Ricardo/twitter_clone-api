import { inject, injectable } from 'inversify';
import { ICommentCypher } from './comment.cypher';
import { MODULE } from '../../../app.registry';

@injectable()
export abstract class CommentCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.COMMENT)
    protected readonly cypher: ICommentCypher,
  ) {}
}
