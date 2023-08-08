import { IPostRepository } from './post.repository';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export abstract class PostRepositoryAcess {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.POST)
    private readonly repository: IPostRepository,
  ) {}
}
