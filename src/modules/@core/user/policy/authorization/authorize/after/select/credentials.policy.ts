import { AuthorizerAccess } from '@User/authorizer/authorizer.access';
import { User } from '../../../../../user.entity';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules/app.registry';
import { IAuthorizer } from '@modules/auth/generic.auth';
import { AuthorizeUserUseCase } from '@User/use-case/authorize.use-case';

@injectable()
export class AuthorizeUserAfterSelectByCredentialsPolicy {
  constructor(
    @inject(MODULE.AUTH.JWT)
    protected readonly authorizer: IAuthorizer,
    @inject(MODULE.USER.USE_CASE.AUTHORIZE)
    protected readonly authorize: AuthorizeUserUseCase,
  ) {}

  async execute(id: string) {
    const sessionToken = this.authorizer.generateToken({ id });
    const user = await this.authorize.execute({ id, sessionToken });

    user.sessionToken = sessionToken;
    return user;
  }
}
