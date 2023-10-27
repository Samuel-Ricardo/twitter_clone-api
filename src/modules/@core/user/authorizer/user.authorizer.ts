import { IAuthorizationData } from '@Type/core/auth/jwt/data';

export interface IUserAuthorizer {
  isAuthorized(data: IAuthorizationData): boolean;
}
