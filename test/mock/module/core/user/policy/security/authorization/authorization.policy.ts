import { AuthorizeAllExistingUserPolicy } from '../../../../../../../../src/modules/@core/user/policy/authorization/authorization.policy';
import { mockDeep } from 'jest-mock-extended';

export const mockAuthorizeAllExistingUserPolicy = () =>
  mockDeep<AuthorizeAllExistingUserPolicy>();
