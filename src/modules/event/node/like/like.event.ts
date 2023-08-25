import { inject, injectable } from 'inversify';
import { ILikeEvents } from '../../../@core/like';
import { Events } from '../event_emmiter';
import { MODULE } from '@modules/app.registry';

@injectable()
export class NodeLikeEvents implements ILikeEvents {
  constructor(
    @inject(MODULE.EVENTS.NODE.EMITTER)
    private events: Events,
  ) {}
}
