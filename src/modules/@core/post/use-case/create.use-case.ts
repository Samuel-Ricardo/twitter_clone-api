import { ICreatePostDTO } from '@Post/DTO';
import { IPostRepository } from '@Post/post.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.POST)
    private readonly repository: IPostRepository,
  ) {}

  async execute(data: ICreatePostDTO) {
    return await this.repository.create(data);
  }
}
