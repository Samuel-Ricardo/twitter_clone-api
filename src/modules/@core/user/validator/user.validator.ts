import { CreateUserDTO, IDeleteuserDTO, UpdateUserDTO } from '@User/DTO';
import { InvalidDataError, NoDataProvidedError } from '@modules/error/data';
import { injectable } from 'inversify';

@injectable()
export class UserValidator {
  constructor() {}

  validateCreateDTO(data: CreateUserDTO) {
    if (!data) throw new NoDataProvidedError();

    if (!data.name) throw new InvalidDataError('name is missing');
    if (!data.username) throw new InvalidDataError('username is missing');
    if (!data.email) throw new InvalidDataError('email is missing');
    if (!data.password) throw new InvalidDataError('password is missing');
  }

  validateUpdateDTO(data: UpdateUserDTO) {
    if (!data) throw new NoDataProvidedError();

    if (!data.id) throw new InvalidDataError('id is missing');
  }

  validateDeleteDTO(data: IDeleteuserDTO) {
    if (!data) throw new NoDataProvidedError();

    if (!data.id) throw new InvalidDataError('id is missing');
  }
}
