import { IAuthorizeUserDTO } from '@User/DTO/authorizer/authorize.dto';
import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class AuthorizeUserUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private repository: IUserRepository,
  ) {}

  async execute({ id, sessionToken }: IAuthorizeUserDTO) {
    return await this.repository.update({ id, sessionToken });
  }
}
