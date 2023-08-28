import { MODULE } from '@modules/app.registry';
import EventEmitter2 from 'eventemitter2';
import { inject, injectable } from 'inversify';
import { IErrorEvent, IErrorEventDTO } from './DTO/error.dto';
import { EVENT } from '@modules/event/event.config';

@injectable()
export class NodeAppEvents {
  constructor(
    @inject(MODULE.EVENTS.NODE.EMITTER)
    protected readonly events: EventEmitter2,
  ) {}

  async supscribeErrorEvents(schedule: IErrorEvent) {
    this.events.on(EVENT.ERROR.APP, schedule.job);
  }

  async publishErrorEvent(data: IErrorEventDTO) {
    this.events.emit(EVENT.ERROR.APP, data);
  }
}
