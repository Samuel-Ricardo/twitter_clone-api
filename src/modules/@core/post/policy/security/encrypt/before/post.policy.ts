import { IPostDTO } from '@Post/DTO';
import { PostCypherAccess } from '@Post/cypher/cypher.access';
import { Post } from '@Post/entity';

export class EncryptPostBeforeSendPolicy extends PostCypherAccess {
  execute(post: IPostDTO | Post) {
    return post instanceof Post
      ? this.cypher.encryptPost(post.toStruct())
      : this.cypher.encryptPost(post);
  }
}
