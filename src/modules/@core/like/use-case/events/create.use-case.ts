import { ILikeDTO } from '../../DTO';
import { LikeEventsSupport } from '../../events';

export class EmitCreateLikeEventUseCase extends LikeEventsSupport {
  execute(data: ILikeDTO) {
    this.events.emitCreateLike(data);
  }
}
