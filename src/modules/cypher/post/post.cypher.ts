import { IPostDTO } from '@Post';
import { IPostCypher } from '@Post/cypher/post.cypher';
import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export class PostCypher implements IPostCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cypher: ICryptographer,
  ) {}

  encryptPost(post: IPostDTO) {
    return this.cypher.encryptIV(JSON.stringify(post));
  }

  decryptPost(post: string) {
    return JSON.parse(this.cypher.decryptIV(post));
  }

  encryptPosts(posts: IPostDTO[]) {
    return this.cypher.encryptIV(JSON.stringify(posts));
  }

  decryptPosts(posts: string) {
    return JSON.parse(this.cypher.decryptIV(posts));
  }
}
