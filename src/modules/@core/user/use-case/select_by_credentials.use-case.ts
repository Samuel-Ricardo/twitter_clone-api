import { IUserRepository } from '@User/user.repository';
import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { ISelectUserByCredentialsDTO } from '@User/DTO/select_by_credentials.dto';

@injectable()
export class SelectUserByCredentialsUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private readonly repository: IUserRepository,
  ) {}
  async execute(user: ISelectUserByCredentialsDTO) {
    return await this.repository.selectByCredentials(user);
  }
}
