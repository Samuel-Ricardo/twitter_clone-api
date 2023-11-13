import { Container } from 'inversify';
import { CRYPTOGRAPHY_MODULE_MOCK } from './cryptography/cryptography.module';

const MODULE = new Container({ autoBindInjectable: true });

export const SECURITY_MODULE_MOCK = Container.merge(
  MODULE,
  CRYPTOGRAPHY_MODULE_MOCK,
);
