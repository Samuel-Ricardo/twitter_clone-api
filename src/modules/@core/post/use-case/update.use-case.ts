import { IUpdatePostDTO } from '@Post/DTO';
import { IPostRepository } from '@Post/post.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.POST)
    private readonly repository: IPostRepository,
  ) {}

  async execute(post: IUpdatePostDTO) {
    return await this.repository.update(post);
  }
}
