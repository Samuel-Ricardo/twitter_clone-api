import { EncryptFollowBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/follow/policy/security/encrypt/before/follow.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptFollowBeforeSendPolicy = () =>
  mockDeep<EncryptFollowBeforeSendPolicy>();
