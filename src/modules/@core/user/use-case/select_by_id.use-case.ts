import { SelectUserByIdDTO } from '@User/DTO';
import { IUserRepository } from '@User/user.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class SelectUserByIdUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.USER)
    private userRepository: IUserRepository,
  ) {}

  async execute(data: SelectUserByIdDTO) {
    return await this.userRepository.selectById(data);
  }
}
