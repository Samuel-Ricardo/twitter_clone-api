import { HashPasswrodBeforeSavePolicy } from '../../../../../../../../src/modules/@core/user/policy/security/encrypt/password.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockHashPasswordBeforeSavePolicy = () =>
  mockDeep<HashPasswrodBeforeSavePolicy>();
