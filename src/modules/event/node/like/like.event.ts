import { injectable } from 'inversify';
import {
  ICreateLikeEventDTO,
  ILikeDTO,
  ILikeEvents,
} from '../../../@core/like';
import { EVENT } from '../../event.config';
import { NodeAppEvents } from '../app';

@injectable()
export class NodeLikeEvents extends NodeAppEvents implements ILikeEvents {
  subscribeCreateLike(scheduled: ICreateLikeEventDTO) {
    this.events.on(EVENT.LIKE.CREATE, scheduled.job);
  }

  publishCreateLike(data: ILikeDTO) {
    this.events.emit(EVENT.LIKE.CREATE, data);
  }
}
