import { Container } from 'inversify';
import { CRYPTOGRAPHY_MODULE } from './cryptography/cryptography.module';

import getDecorators from 'inversify-inject-decorators';
import { SECURITY_REGISTRY } from './security.registry';
import { Turing } from './cryptography/turing/turing.cryptographer';

const MODULE = new Container({ autoBindInjectable: true });

export const SECURITY_MODULE = Container.merge(MODULE, CRYPTOGRAPHY_MODULE);

SECURITY_MODULE.bind(SECURITY_REGISTRY.TURING).to(Turing);

export const { lazyInject: injectSecurity } = getDecorators(SECURITY_MODULE);
