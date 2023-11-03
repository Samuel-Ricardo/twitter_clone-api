import { CYPHER_MODULE } from './cypher.module';
import { CYPHER_REGISTRY } from './cypher.registry';
import { LikeCypher } from './like/like.cypher';
import { PostCypher } from './post/post.cypher';
import { UserCypher } from './user/user.cypher';

export const CYPHER_FACTORY = {
  USER: () => CYPHER_MODULE.get<UserCypher>(CYPHER_REGISTRY.USER),
  POST: () => CYPHER_MODULE.get<PostCypher>(CYPHER_REGISTRY.POST),
  LIKE: () => CYPHER_MODULE.get<LikeCypher>(CYPHER_REGISTRY.LIKE),
};
