import { inject, injectable } from 'inversify';
import {
  ICreateLikeEventDTO,
  ILikeDTO,
  ILikeEvents,
} from '../../../@core/like';
import { EventEmitter } from 'node:events';
import { EVENT } from '../../event.config';
import { MODULE } from '@modules/app.registry';

@injectable()
export class NodeLikeEvents implements ILikeEvents {
  constructor(
    @inject(MODULE.EVENTS.NODE.EMITTER)
    private events: EventEmitter,
  ) {}

  subscribeCreateLike(job: ICreateLikeEventDTO) {
    this.events.on(EVENT.LIKE.CREATE, job.execute);
  }

  emitCreateLike(data: ILikeDTO) {
    this.events.emit(EVENT.LIKE.CREATE, data);
  }
}
