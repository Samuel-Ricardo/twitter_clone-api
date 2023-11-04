import { CommentCypher } from './comment/comment.cypher';
import { CYPHER_MODULE } from './cypher.module';
import { CYPHER_REGISTRY } from './cypher.registry';
import { FollowCypher } from './follow/follow.cypher';
import { LikeCypher } from './like/like.cypher';
import { PostCypher } from './post/post.cypher';
import { UserCypher } from './user/user.cypher';

export const CYPHER_FACTORY = {
  USER: () => CYPHER_MODULE.get<UserCypher>(CYPHER_REGISTRY.USER),
  POST: () => CYPHER_MODULE.get<PostCypher>(CYPHER_REGISTRY.POST),
  LIKE: () => CYPHER_MODULE.get<LikeCypher>(CYPHER_REGISTRY.LIKE),
  FOLLOW: () => CYPHER_MODULE.get<FollowCypher>(CYPHER_REGISTRY.FOLLOW),
  COMMENT: () => CYPHER_MODULE.get<CommentCypher>(CYPHER_REGISTRY.COMMENT),
};
