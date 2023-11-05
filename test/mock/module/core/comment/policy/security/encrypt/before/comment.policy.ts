import { EncryptCommentBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/comment/policy/security/encrypt/before/comment.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptCommentBeforeSendPolicy = () =>
  mockDeep<EncryptCommentBeforeSendPolicy>();
