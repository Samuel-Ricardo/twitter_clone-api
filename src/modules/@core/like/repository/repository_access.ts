import { inject, injectable } from 'inversify';
import { ILikeRepository } from './like.repository';

@injectable()
export abstract class LikeRepositoryAccess {
  constructor(
    @inject('ILikeRepository')
    protected readonly repository: ILikeRepository,
  ) {}
}
