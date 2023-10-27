import { Container } from 'inversify';
import { AUTH_JWT_MODULE } from './jwt/jwt.module';
import getDecorators from 'inversify-inject-decorators';

export const AUTH_MODULE = Container.merge(
  new Container({ autoBindInjectable: true }),
  AUTH_JWT_MODULE,
);

export const { lazyInject: injectAuth } = getDecorators(AUTH_MODULE);
