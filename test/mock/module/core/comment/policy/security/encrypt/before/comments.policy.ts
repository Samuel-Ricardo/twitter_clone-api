import { EncryptCommentListBeforeSendPolicy } from '../../../../../../../../../src/modules/@core/comment/policy/security/encrypt/before/comments.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockEncryptCommentListBeforeSendPolicy = () =>
  mockDeep<EncryptCommentListBeforeSendPolicy>();
