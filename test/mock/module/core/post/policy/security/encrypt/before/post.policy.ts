import { EncryptPostBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/post/policy/security/encrypt/before/post.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptPostBeforeSendPolicy = () =>
  mockDeep<EncryptPostBeforeSendPolicy>();
