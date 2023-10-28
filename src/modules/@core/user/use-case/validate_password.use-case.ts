import { injectable } from 'inversify';
import { IValidateUserPasswordDTO } from '@User/DTO/validate_password.use-case';
import { UserCypherAccess } from '@User/cypher/cypher.access';

@injectable()
export class ValidateUserPasswordUseCase extends UserCypherAccess {
  execute({ password }: IValidateUserPasswordDTO) {
    return this._cypher.comparePassword(password.expected, password.given);
  }
}
