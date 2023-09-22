import { injectable } from 'inversify';
import { IValidateUserPasswordDTO } from '@User/DTO/validate_password.use-case';

@injectable()
export class ValidateUserPasswordUseCase {
  execute({ password }: IValidateUserPasswordDTO) {
    return password.given === password.expected;
  }
}
