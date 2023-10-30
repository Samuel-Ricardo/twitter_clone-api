import { IAuthorizationData } from '@Type/core/auth/jwt/data';
import { JwtPayload } from 'jsonwebtoken';

export interface IAuthorizer {
  generateToken(data: IAuthorizationData): string;
  validateToken(token: string): JwtPayload | string;
}
