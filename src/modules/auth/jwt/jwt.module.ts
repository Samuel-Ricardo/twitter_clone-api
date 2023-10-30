import { Container } from 'inversify';
import { AUTH_JWT_REGISTRY } from './jwt.registry';
import { JWT } from './jwt.auth';
import { JWT_MODULE } from '../../jwt/jwt.module';

const MODULE = new Container({ autoBindInjectable: true });

export const AUTH_JWT_MODULE = Container.merge(MODULE, JWT_MODULE);

AUTH_JWT_MODULE.bind(AUTH_JWT_REGISTRY.JWT).to(JWT);
