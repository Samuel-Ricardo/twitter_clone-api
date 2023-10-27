import { Container } from 'inversify';
import jwt from 'jsonwebtoken';
import { JWT_REGISTRY } from './jwt.registry';
import getDecorators from 'inversify-inject-decorators';

export const JWT_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

JWT_MODULE.bind(JWT_REGISTRY.JWT).toConstantValue(jwt);

export const { lazyInject: injectJWT } = getDecorators(JWT_MODULE);
