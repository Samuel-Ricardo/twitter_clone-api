import { EncryptLikeListBeforeSendPolicy } from '../../../../../../.././../../src/modules/@core/like/policy/security/encrypt/before/likes.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptLikeListBeforeSendPolicy = () =>
  mockDeep<EncryptLikeListBeforeSendPolicy>();
