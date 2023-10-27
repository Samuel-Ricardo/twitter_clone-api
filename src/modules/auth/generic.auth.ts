import { IAuthorizationData } from '@Type/core/auth/jwt/data';

export interface IAuthorizer {
  generateToken(data: IAuthorizationData): string;
  validateToken(token: string): IAuthorizationData;
}
