import { UserService } from '../service/user.service';
import { inject, injectable } from 'inversify';
import { UserRegistry as USER_MODULE } from '../user.registry';
import {
  CreateUserDTO,
  IDeleteuserDTO,
  SelectUserByIdDTO,
  UpdateUserDTO,
} from '@User/DTO';
import { ISelectUserByCredentialsDTO } from '@User/DTO/select_by_credentials.dto';
import { ISelectUserByEmailDTO } from '@User/DTO/select_by_email.dto';

@injectable()
export class UserController {
  constructor(
    @inject(USER_MODULE.SERVICE.DEFAULT)
    private service: UserService,
  ) {}

  async create(data: CreateUserDTO) {
    const user = await this.service.create(data);
    return { user };
  }

  async seletcAll() {
    const users = await this.service.selectAll();

    return { users };
  }

  async selectById(data: SelectUserByIdDTO) {
    const user = await this.service.selectById(data);

    return { user };
  }

  async selectByEmail(data: ISelectUserByEmailDTO) {
    const user = await this.service.selectByEmail(data);

    return { user };
  }

  async update(data: UpdateUserDTO) {
    const user = await this.service.update(data);

    return { user };
  }

  async delete(data: IDeleteuserDTO) {
    return await this.service.delete(data);
  }

  async selectByCredentials(data: ISelectUserByCredentialsDTO) {
    const user = await this.service.selectByCredentials(data);

    return user
      ? { user }
      : { error: 'User not found, verify your credentials' };
  }
}
