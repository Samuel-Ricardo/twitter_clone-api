import { CYPHER_MODULE } from './cypher.module';
import { CYPHER_REGISTRY } from './cypher.registry';
import { UserCypher } from './user/user.cypher';

export const CYPHER_FACTORY = {
  USER: CYPHER_MODULE.get<UserCypher>(CYPHER_REGISTRY.USER),
};