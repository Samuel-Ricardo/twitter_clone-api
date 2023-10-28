import { SelectUserByIdUseCase } from '../use-case';
import { MODULE } from '@modules/app.registry';
import { IAuthorizer } from '@modules/auth/generic.auth';
import { inject, injectable } from 'inversify';

@injectable()
export class AuthorizerAccess {
  constructor(
    @inject(MODULE.AUTH.JWT)
    protected readonly authorizer: IAuthorizer,
    @inject(MODULE.USER.USE_CASE.SELECT.BY_ID)
    protected readonly selectUserById: SelectUserByIdUseCase,
  ) {}
}
