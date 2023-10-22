import { SECURITY_MODULE } from '@modules/security/security.module';
import { Container } from 'inversify';
import { UserCypher } from './user/user.cypher';

import getDecorators from 'inversify-inject-decorators';
import { CYPHER_REGISTRY } from './cypher.registry';

const MODULE = new Container({ autoBindInjectable: true });

export const CYPHER_MODULE = Container.merge(MODULE, SECURITY_MODULE);

CYPHER_MODULE.bind(CYPHER_REGISTRY.USER).to(UserCypher);

export const { lazyInject: injectCypher } = getDecorators(CYPHER_MODULE);
