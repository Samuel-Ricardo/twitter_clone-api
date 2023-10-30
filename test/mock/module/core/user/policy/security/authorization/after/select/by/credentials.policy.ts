import { mockDeep } from 'jest-mock-extended';
import { AuthorizeUserAfterSelectByCredentialsPolicy } from '../../../../../../../../../../../src/modules/@core/user/policy/authorization/authorize/after/select/credentials.policy';

export const mockAuthorizeUserAfterSelectByCredentialsPolicy = () =>
  mockDeep<AuthorizeUserAfterSelectByCredentialsPolicy>();
