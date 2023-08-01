import { IDeleteuserDTO } from '@User/DTO';
import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private repository: IUserRepository,
  ) {}

  async execute(data: IDeleteuserDTO) {
    return await this.repository.delete(data);
  }
}
