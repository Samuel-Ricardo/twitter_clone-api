import { Container } from 'inversify';
import { ARGON_REGISTRY_MOCK } from './argon.registry';
import argon2 from 'argon2';
import { mockDeep } from 'jest-mock-extended';

export const ARGON_MODULE_MOCK = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ARGON_MODULE_MOCK.bind(ARGON_REGISTRY_MOCK[2]).toDynamicValue(() =>
  mockDeep<typeof argon2>(),
);
