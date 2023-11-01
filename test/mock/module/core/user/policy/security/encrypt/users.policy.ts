import { EncryptUserListBeforeSendPolicy } from '@User/policy/security/encrypt/users.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptUserListBeforeSendPolicy = () =>
  mockDeep<EncryptUserListBeforeSendPolicy>();
