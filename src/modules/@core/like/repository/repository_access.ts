import { inject, injectable } from 'inversify';
import { ILikeRepository } from './like.repository';
import { MODULE } from '@modules';

@injectable()
export abstract class LikeRepositoryAccess {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.LIKE)
    protected readonly repository: ILikeRepository,
  ) {}
}
