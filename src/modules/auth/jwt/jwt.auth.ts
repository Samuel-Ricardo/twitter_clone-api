import { jsonwebtoken } from '@Type/core/auth/jwt';
import { inject, injectable } from 'inversify';
import { ENV } from '@env';
import { IAuthorizationData } from '@Type/core/auth/jwt/data';
import { IAuthorizer } from '../generic.auth';
import { MODULE } from '@modules/app.registry';

@injectable()
export class JWT implements IAuthorizer {
  protected readonly _secret = ENV.AUTH.TOKEN.SECRET;

  constructor(
    @inject(MODULE.JWT)
    protected readonly _jwt: jsonwebtoken,
  ) {}

  generateToken({ id }: IAuthorizationData) {
    return this._jwt.sign(id, this._secret);
  }

  validateToken(token: string) {
    return this._jwt.verify(token, this._secret) as IAuthorizationData;
  }
}
