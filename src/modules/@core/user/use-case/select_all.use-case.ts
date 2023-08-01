import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class SelectAllUsersUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private repository: IUserRepository,
  ) {}

  async execute() {
    return await this.repository.selectAll();
  }
}
