import { injectable } from 'inversify';
import { ILikeDTO } from '../../DTO';
import { LikeEventsSupport } from '../../events';

@injectable()
export class EmitCreateLikeEventUseCase extends LikeEventsSupport {
  execute(data: ILikeDTO) {
    this.events.publishCreateLike(data);
  }
}
