import { ICreateLikeEventDTO, LikeEventsSupport } from '../../../like';

export class OnCreateLikeEventUseCase extends LikeEventsSupport {
  execute(scheduled: ICreateLikeEventDTO) {
    this.events.subscribeCreateLike(scheduled);
  }
}
