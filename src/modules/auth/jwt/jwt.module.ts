import { Container } from 'inversify';
import { AUTH_JWT_REGISTRY } from './jwt.registry';
import { JWT } from './jwt.auth';

export const AUTH_JWT_MODULE = new Container({ autoBindInjectable: true });

AUTH_JWT_MODULE.bind(AUTH_JWT_REGISTRY.JWT).to(JWT);
