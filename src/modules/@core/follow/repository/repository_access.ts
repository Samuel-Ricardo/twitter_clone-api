import { inject, injectable } from 'inversify';
import { IFollowRepository } from './follow.repository';
import { MODULE } from '../../../app.registry';

@injectable()
export class FollowRepositoryAccess {
  constructor(
    @inject(MODULE.REPOSITORY.PRISMA.FOLLOW)
    protected readonly repository: IFollowRepository,
  ) {}
}
