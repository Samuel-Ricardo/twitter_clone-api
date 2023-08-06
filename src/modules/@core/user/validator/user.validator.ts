import {
  CreateUserDTO,
  CreateUserSchema,
  IDeleteuserDTO,
  SelectUserByIdDTO,
  UpdateUserDTO,
} from '@User/DTO';
import { InvalidDataError, NoDataProvidedError } from '@modules/error/data';
import { injectable } from 'inversify';

@injectable()
export class UserValidator {
  constructor() {}

  validateCreateDTO(data: CreateUserDTO) {
    return CreateUserSchema.parse(data);
  }

  validateUpdateDTO(data: UpdateUserDTO) {
    this.shouldBeDefined(data);

    if (!data.id) throw new InvalidDataError('id is missing');
  }

  validateDeleteDTO(data: IDeleteuserDTO) {
    this.shouldBeDefined(data);

    if (!data.id) throw new InvalidDataError('id is missing');
  }

  validateSelectByIdDTO(data: SelectUserByIdDTO) {
    this.shouldBeDefined(data);

    if (!data.id) throw new InvalidDataError('id is missing');
  }

  shouldBeDefined(data: any) {
    if (!data) throw new NoDataProvidedError();
  }
}
