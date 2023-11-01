import { inject, injectable } from 'inversify';
import { IPostCypher } from './post.cypher';
import { MODULE } from '@modules/app.registry';

@injectable()
export abstract class PostCypherAccess {
  constructor(
    @inject(MODULE.CYPHER.POST)
    protected readonly cypher: IPostCypher,
  ) {}
}
