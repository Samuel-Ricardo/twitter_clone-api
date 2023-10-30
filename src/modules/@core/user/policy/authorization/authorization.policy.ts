import { IIsUserAuthorizedDTO } from '@User/DTO/authorizer/user.dto';
import { injectable } from 'inversify';
import { AuthorizerAccess } from '@User/authorizer/authorizer.access';

@injectable()
export class AuthorizeAllExistingUserPolicy extends AuthorizerAccess {
  async execute(data: IIsUserAuthorizedDTO) {
    try {
      const id = this.authorizer.validateToken(data.id) as string;
      const user = await this.selectUserById.execute({ id });

      return user ? true : false;
    } catch (err) {
      return false;
    }
  }
}
