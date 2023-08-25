import { inject, injectable } from 'inversify';
import { ILikeEvents } from './like.events';
import { MODULE } from '../../../app.registry';

@injectable()
export abstract class LikeEventsSupport {
  constructor(
    @inject(MODULE.EVENTS.NODE.LIKE)
    protected events: ILikeEvents,
  ) {}
}
