import { Container } from 'inversify';
import { ARGON_REGISTRY } from './argon.registry';
import argon2 from 'argon2';
import getDecorators from 'inversify-inject-decorators';

export const ARGON_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ARGON_MODULE.bind(ARGON_REGISTRY[2]).toConstantValue(argon2);

export const { lazyInject: injectArgon } = getDecorators(ARGON_MODULE);
