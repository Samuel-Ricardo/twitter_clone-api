import { CreateUserDTO } from '@User/DTO';
import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private repository: IUserRepository,
  ) {}

  async execute(data: CreateUserDTO) {
    return await this.repository.create(data);
  }
}
