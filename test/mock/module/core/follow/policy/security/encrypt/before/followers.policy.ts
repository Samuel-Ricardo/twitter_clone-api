import { EncryptFollowListBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/follow/policy/security/encrypt/before/followers.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptFollowListBeforeSendPolicy = () =>
  mockDeep<EncryptFollowListBeforeSendPolicy>();
