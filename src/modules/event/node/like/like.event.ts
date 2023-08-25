import { inject, injectable } from 'inversify';
import {
  ICreateLikeEventDTO,
  ILikeDTO,
  ILikeEvents,
} from '../../../@core/like';
import { Events } from '../event_emmiter';
import { MODULE } from '@modules/app.registry';
import { EVENT } from '../../event.config';

@injectable()
export class NodeLikeEvents implements ILikeEvents {
  constructor(
    @inject(MODULE.EVENTS.NODE.EMITTER)
    private events: Events,
  ) {}

  subscribeCreateLike(job: ICreateLikeEventDTO) {
    this.events.on(EVENT.LIKE.CREATE, job.execute);
  }
}
