import { inject, injectable } from 'inversify';
import { LikeService } from '../service/like.service';
import { LikeRegistry } from '../like.registry';
import { ICreateLikeDTO } from '../DTO/create.dto';

@injectable()
export class LikeController {
  constructor(
    @inject(LikeRegistry.SERVICE.DEFAULT)
    private readonly service: LikeService,
  ) {}

  async save(data: ICreateLikeDTO) {
    return await this.service.like(data);
  }
}
