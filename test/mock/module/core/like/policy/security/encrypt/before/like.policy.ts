import { EncryptLikeBeforeSendPolicy } from '../../../../../../.././../../src/modules/@core/like/policy/security/encrypt/before/like.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptLikeBeforeSendPolicy = () =>
  mockDeep<EncryptLikeBeforeSendPolicy>();
