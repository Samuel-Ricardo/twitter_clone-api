import { inject, injectable } from 'inversify';
import { IFollowRepository } from './follow.repository';

@injectable()
export class FollowRepositoryAccess {
  constructor(
    @inject('PedroBatatas.FollowRepository')
    protected readonly repository: IFollowRepository,
  ) {}
}
