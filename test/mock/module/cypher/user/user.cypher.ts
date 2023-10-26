import { mockDeep } from 'jest-mock-extended';
import { UserCypher } from '../../../../../src/modules/cypher/user/user.cypher';

export const mockUserCypher = () => mockDeep<UserCypher>();
