import { EncryptUserBeforeSendPolicy } from '../../../../../../../../src/modules/@core/user/policy/security/encrypt/user.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptUserBeforeSendPolicy = () =>
  mockDeep<EncryptUserBeforeSendPolicy>();
