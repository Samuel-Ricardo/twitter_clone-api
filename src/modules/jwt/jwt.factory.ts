import jwt from 'jsonwebtoken';
import { JWT_MODULE } from './jwt.module';
import { JWT_REGISTRY } from './jwt.registry';

export const JWT_FACTORY = {
  JWT: () => JWT_MODULE.get<typeof jwt>(JWT_REGISTRY.JWT),
};
