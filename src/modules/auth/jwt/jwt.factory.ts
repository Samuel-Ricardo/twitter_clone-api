import { JWT } from './jwt.auth';
import { AUTH_JWT_MODULE } from './jwt.module';
import { AUTH_JWT_REGISTRY } from './jwt.registry';

export const AUTH_JWT_FACTORY = {
  JWT: () => AUTH_JWT_MODULE.get<JWT>(AUTH_JWT_REGISTRY.JWT),
};
