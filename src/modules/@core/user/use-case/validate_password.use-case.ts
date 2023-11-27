import { injectable } from 'inversify';
import { IValidateUserPasswordDTO } from '@User/DTO/validate_password.use-case';
import { UserCypherAccess } from '../cypher/cypher.access';

@injectable()
export class ValidateUserPasswordUseCase extends UserCypherAccess {
  execute({ password }: IValidateUserPasswordDTO) {
    return (
      password.given === password.expected ||
      this._cypher.comparePassword(password.expected, password.given)
    );
  }
}
