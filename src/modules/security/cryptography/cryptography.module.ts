import { Container } from 'inversify';
import { CRYPTOGRAPHY_ALGORITHM_MODULE } from './algorithm/algorithm.module';
import getDecorators from 'inversify-inject-decorators';
import { Turing } from './turing/turing.cryptographer';
import { CRYPTOGRAPHY_REGISTRY } from './cryptography.registry';

const MODULE = new Container({ autoBindInjectable: true });

export const CRYPTOGRAPHY_MODULE = Container.merge(
  MODULE,
  CRYPTOGRAPHY_ALGORITHM_MODULE,
);

CRYPTOGRAPHY_MODULE.bind(CRYPTOGRAPHY_REGISTRY.TURING).to(Turing);

export const { lazyInject: injectCryptography } =
  getDecorators(CRYPTOGRAPHY_MODULE);
