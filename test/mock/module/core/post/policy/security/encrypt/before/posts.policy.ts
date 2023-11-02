import { EncryptPostListBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/post/policy/security/encrypt/before/posts.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptPostListBeforeSendPolicy = () =>
  mockDeep<EncryptPostListBeforeSendPolicy>();
