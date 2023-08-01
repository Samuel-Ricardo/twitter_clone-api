import { UpdateUserDTO } from '@User/DTO';
import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject(MODULE.PRISMA)
    private userRepository: IUserRepository,
  ) {}

  async execute(data: UpdateUserDTO) {
    return await this.userRepository.update(data);
  }
}
