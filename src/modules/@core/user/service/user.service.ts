import {
  CreateUserDTO,
  IDeleteuserDTO,
  SelectUserByIdDTO,
  UpdateUserDTO,
} from '@User/DTO';
import { CreateUserUseCase } from '@User/use-case';
import { UserRegistry as USER_MODULE } from '../user.registry';
import { inject, injectable } from 'inversify';
import { UpdateUserUseCase } from '@User/use-case/update.use-case';
import { DeleteUserUseCase } from '@User/use-case/delete.use-case';
import { SelectAllUsersUseCase } from '@User/use-case/select_all.use-case';
import { SelectUserByIdUseCase } from '@User/use-case/select_by_id.use-case';
import { ValidateUserPasswordUseCase } from '@User/use-case/validate_password.use-case';
import { ISelectUserByCredentialsDTO } from '@User/DTO/select_by_credentials.dto';
import { SelectUserByCredentialsUseCase } from '@User/use-case/select_by_credentials.use-case';

@injectable()
export class UserService {
  constructor(
    @inject(USER_MODULE.USE_CASE.CREATE)
    private createUser: CreateUserUseCase,

    @inject(USER_MODULE.USE_CASE.UPDATE)
    private updateUser: UpdateUserUseCase,

    @inject(USER_MODULE.USE_CASE.DELETE)
    private deleteUser: DeleteUserUseCase,

    @inject(USER_MODULE.USE_CASE.SELECT.ALL)
    private selectAllUser: SelectAllUsersUseCase,

    @inject(USER_MODULE.USE_CASE.SELECT.BY_ID)
    private selectUserById: SelectUserByIdUseCase,

    @inject(USER_MODULE.USE_CASE.SELECT.BY.CREDENTIALS)
    private selectUserByCredentials: SelectUserByCredentialsUseCase,

    @inject(USER_MODULE.USE_CASE.VALIDATE.PASSWORD)
    private validateUserPassword: ValidateUserPasswordUseCase,
  ) {}

  async create(data: CreateUserDTO) {
    return await this.createUser.execute(data);
  }

  async update(data: UpdateUserDTO) {
    return await this.updateUser.execute(data);
  }

  async delete(data: IDeleteuserDTO) {
    return await this.deleteUser.execute(data);
  }

  async selectAll() {
    return await this.selectAllUser.execute();
  }

  async selectById(data: SelectUserByIdDTO) {
    return await this.selectUserById.execute(data);
  }

  async selectByCredentials(data: ISelectUserByCredentialsDTO) {
    const user = await this.selectUserByCredentials.execute(data);

    return this.validateUserPassword.execute({
      password: { expected: data.password, given: user.password },
    })
      ? user
      : null;
  }
}
