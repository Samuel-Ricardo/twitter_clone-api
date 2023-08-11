import { inject, injectable } from 'inversify';
import { LikeService } from '../service/like.service';
import { LikeRegistry } from '../like.registry';

@injectable()
export class LikeController {
  constructor(
    @inject(LikeRegistry.SERVICE.DEFAULT)
    private readonly service: LikeService,
  ) {}
}
