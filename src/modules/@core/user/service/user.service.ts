import { CreateUserDTO } from '@User/DTO';
import { CreateUserUseCase } from '@User/use-case';
import { USER_MODULE } from '../user.factory';
import { inject, injectable } from 'inversify';

@injectable()
export class UserService {
  constructor(
    @inject(USER_MODULE.USE_CASE.CREATE)
    private createUser: CreateUserUseCase,
  ) {}

  async create(data: CreateUserDTO) {
    return await this.createUser.execute(data);
  }
}
