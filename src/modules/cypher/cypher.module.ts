import { SECURITY_MODULE } from '../security/security.module';
import { Container } from 'inversify';
import { UserCypher } from './user/user.cypher';

import getDecorators from 'inversify-inject-decorators';
import { CYPHER_REGISTRY } from './cypher.registry';
import { PostCypher } from './post/post.cypher';

const MODULE = new Container({ autoBindInjectable: true });

export const CYPHER_MODULE = Container.merge(MODULE, SECURITY_MODULE);

CYPHER_MODULE.bind(CYPHER_REGISTRY.USER).to(UserCypher);
CYPHER_MODULE.bind(CYPHER_REGISTRY.POST).to(PostCypher);

export const { lazyInject: injectCypher } = getDecorators(CYPHER_MODULE);
