import { Container } from 'inversify';
import { CRYPTOGRAPHY_MODULE } from './cryptography/cryptography.module';

import getDecorators from 'inversify-inject-decorators';

const MODULE = new Container({ autoBindInjectable: true });

export const SECURITY_MODULE = Container.merge(MODULE, CRYPTOGRAPHY_MODULE);

export const { lazyInject: injectSecurity } = getDecorators(SECURITY_MODULE);
