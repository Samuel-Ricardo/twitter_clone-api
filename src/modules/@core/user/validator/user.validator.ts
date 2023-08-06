import {
  CreateUserDTO,
  CreateUserSchema,
  DeleteUserScheme,
  IDeleteuserDTO,
  SelectUserByIdDTO,
  SelectUserByIdSchema,
  UpdateUserDTO,
  UpdateUserSchema,
} from '@User/DTO';
import { InvalidDataError, NoDataProvidedError } from '@modules/error/data';
import { injectable } from 'inversify';
import { z } from 'zod';

@injectable()
export class UserValidator {
  constructor() {}

  validateCreateDTO(data: CreateUserDTO) {
    this.shouldBeDefined(data);
    return CreateUserSchema.parse(data);
  }

  validateUpdateDTO(data: UpdateUserDTO) {
    this.shouldBeDefined(data);
    return UpdateUserSchema.parse(data);
  }

  validateDeleteDTO(data: IDeleteuserDTO) {
    this.shouldBeDefined(data);
    return DeleteUserScheme.parse(data);
  }

  validateSelectByIdDTO(data: SelectUserByIdDTO) {
    this.shouldBeDefined(data);

    return SelectUserByIdSchema.parse(data);
  }

  validate(scheme: z.ZodAny, data: any) {
    return scheme.parse(data);
  }

  shouldBeDefined(data: any) {
    if (!data) throw new NoDataProvidedError();
  }
}
