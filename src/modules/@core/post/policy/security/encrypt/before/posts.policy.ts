import { IPostDTO } from '@Post/DTO';
import { Post } from '@Post/entity';
import { PostCypherAccess } from '../../../../cypher/cypher.access';

export class EncryptPostListBeforeSendPolicy extends PostCypherAccess {
  execute(posts: IPostDTO[] | Post[]) {
    return posts[0] instanceof Post
      ? this.cypher.encryptPosts(
          posts.map((p) => {
            const post = p as Post;
            return post.toStruct();
          }),
        )
      : this.cypher.encryptPosts(posts);
  }
}
