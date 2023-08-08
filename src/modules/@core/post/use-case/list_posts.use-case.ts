import { IPostRepository } from '@Post/post.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class ListPostsUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.POST)
    private readonly repository: IPostRepository,
  ) {}

  async execute() {
    return await this.repository.findAll();
  }
}
