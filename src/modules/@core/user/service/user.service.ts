import { CreateUserDTO, IDeleteuserDTO, UpdateUserDTO } from '@User/DTO';
import { CreateUserUseCase } from '@User/use-case';
import { USER_MODULE } from '../user.factory';
import { inject, injectable } from 'inversify';
import { UpdateUserUseCase } from '@User/use-case/update.use-case';
import { DeleteUserUseCase } from '@User/use-case/delete.use-case';
import { SelectAllUsersUseCase } from '@User/use-case/select_all.use-case';
import { SelectUserByIdUseCase } from '@User/use-case/select_by_id.use-case';

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
}
