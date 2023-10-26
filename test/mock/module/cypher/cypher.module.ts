import { Container } from 'inversify';
import { mockUserCypher } from './user/user.cypher';
import { DeepMockProxy } from 'jest-mock-extended';
import { UserCypher } from '@modules/cypher/user/user.cypher';

export const CYPHER_REGISTRY_MOCK = {
  USER: Symbol.for('MOCK:MODULE:CYPHER.USER)'),
};

export const CYPHER_MODULE_MOCK = new Container({ autoBindInjectable: true });

CYPHER_MODULE_MOCK.bind(CYPHER_REGISTRY_MOCK.USER).toDynamicValue(
  mockUserCypher,
);

export const CYPHER_FACTORY_MOCK = {
  USER: () =>
    CYPHER_MODULE_MOCK.get<DeepMockProxy<UserCypher>>(
      CYPHER_REGISTRY_MOCK.USER,
    ),
};
