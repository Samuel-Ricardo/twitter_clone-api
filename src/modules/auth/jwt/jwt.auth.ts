import { jsonwebtoken } from '@Type/core/auth/jwt';
import { injectable } from 'inversify';
import { ENV } from '@env';
import { IAuthorizationData } from '@Type/core/auth/jwt/data';
import { IAuthorizer } from '../generic.auth';

@injectable()
export class JWT implements IAuthorizer {
  protected readonly _secret = ENV.AUTH.TOKEN.SECRET;

  constructor(protected readonly _jwt: jsonwebtoken) {}
}
