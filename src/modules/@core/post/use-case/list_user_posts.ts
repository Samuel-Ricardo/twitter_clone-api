import { IFindPostByAuthorIdDTO } from '@Post/DTO';
import { IPostRepository } from '@Post/post.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class ListUserPostsUseCase {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.POST)
    private readonly repository: IPostRepository,
  ) {}

  async execute(data: IFindPostByAuthorIdDTO) {
    return await this.repository.findByAuhorId(data);
  }
}
