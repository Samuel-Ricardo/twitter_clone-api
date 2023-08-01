import { UserService } from '@User/service/user.service';
import { inject, injectable } from 'inversify';
import { UserRegistry as USER_MODULE } from '../user.registry';
import { CreateUserDTO } from '@User/DTO';

@injectable()
export class UserController {
  constructor(
    @inject(USER_MODULE.SERVICE.DEFAULT)
    private service: UserService,
  ) {}

  async create(data: CreateUserDTO) {
    return await this.service.create(data);
  }
}
