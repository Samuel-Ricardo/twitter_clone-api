import { Container } from 'inversify';
import { CRYPTO_REGISTRY } from './crypto.registry';
import crypto from 'node:crypto';
import getDecorators from 'inversify-inject-decorators';

export const CRYPTO_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

CRYPTO_MODULE.bind(CRYPTO_REGISTRY.CRYPTO).toConstantValue(crypto);

export const { lazyInject: injectCrypto } = getDecorators(CRYPTO_MODULE);
