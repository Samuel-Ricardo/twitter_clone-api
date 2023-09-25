import { IUserRepository } from '@User/user.repository';
import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { ISelectUserByEmailDTO } from '@User/DTO/select_by_email.dto';

@injectable()
export class SelectUserByEmailUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private readonly repository: IUserRepository,
  ) {}
  async execute(user: ISelectUserByEmailDTO) {
    return await this.repository.selectByEmail(user);
  }
}
