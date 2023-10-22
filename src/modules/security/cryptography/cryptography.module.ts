import { Container } from 'inversify';
import { CRYPTOGRAPHY_ALGORITHM_MODULE } from './algorithm/algorithm.module';
import getDecorators from 'inversify-inject-decorators';

export const MODULE = new Container({ autoBindInjectable: true });

export const CRYPTOGRAPHY_MODULE = Container.merge(
  MODULE,
  CRYPTOGRAPHY_ALGORITHM_MODULE,
);

export const { lazyInject: injectCryptography } =
  getDecorators(CRYPTOGRAPHY_MODULE);
