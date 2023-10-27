import { IIsUserAuthorizedDTO } from '@User/DTO/authorizer/user.dto';
import { AuthorizerAccess } from '@User/authorizer/authorizer.access';

export class AuthorizeAllExistingUserPolicy extends AuthorizerAccess {
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
