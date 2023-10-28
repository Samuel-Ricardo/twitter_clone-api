import { IIsUserAuthorizedDTO } from '@User/DTO/authorizer/user.dto';
//import { AuthorizerAccess } from '../../authorizer/authorizer.access';
import { inject, injectable } from 'inversify';
import { MODULE } from '@modules/app.registry';
import { IAuthorizer } from '@modules/auth/generic.auth';
import { SelectUserByIdUseCase } from '@User/use-case';
import { AuthorizerAccess } from '@User/authorizer/authorizer.access';

@injectable()
export class AuthorizeAllExistingUserPolicy extends AuthorizerAccess {
  //   constructor(
  //     @inject(MODULE.AUTH.JWT)
  //     protected readonly authorizer: IAuthorizer,
  //     @inject(MODULE.USER.USE_CASE.SELECT.BY_ID)
  //     protected readonly selectUserById: SelectUserByIdUseCase,
  //   ) {}

  async execute(data: IIsUserAuthorizedDTO) {
    try {
      const { id } = this.authorizer.validateToken(data.id);
      const user = await this.selectUserById.execute({ id });

      return user ? true : false;
    } catch (err) {
      return false;
    }
  }
}
