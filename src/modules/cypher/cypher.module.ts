import { SECURITY_MODULE } from '../security/security.module';
import { Container } from 'inversify';
import { UserCypher } from './user/user.cypher';

import getDecorators from 'inversify-inject-decorators';
import { CYPHER_REGISTRY } from './cypher.registry';
import { PostCypher } from './post/post.cypher';
import { LikeCypher } from './like/like.cypher';
import { FollowCypher } from './follow/follow.cypher';
import { CommentCypher } from './comment/comment.cypher';

const MODULE = new Container({ autoBindInjectable: true });

export const CYPHER_MODULE = Container.merge(MODULE, SECURITY_MODULE);

CYPHER_MODULE.bind(CYPHER_REGISTRY.USER).to(UserCypher);
CYPHER_MODULE.bind(CYPHER_REGISTRY.POST).to(PostCypher);
CYPHER_MODULE.bind(CYPHER_REGISTRY.LIKE).to(LikeCypher);
CYPHER_MODULE.bind(CYPHER_REGISTRY.FOLLOW).to(FollowCypher);
CYPHER_MODULE.bind(CYPHER_REGISTRY.COMMENT).to(CommentCypher);

export const { lazyInject: injectCypher } = getDecorators(CYPHER_MODULE);
