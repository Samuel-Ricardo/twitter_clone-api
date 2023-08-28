import { MODULE } from '@modules/app.registry';
import EventEmitter2 from 'eventemitter2';
import { inject, injectable } from 'inversify';
import { EVENT } from '@modules/event/event.config';
import { IErrorEvent, IErrorEventDTO } from '../../app/DTO';
import { IAppEvents } from '../../app';

@injectable()
export class NodeAppEvents implements IAppEvents {
  constructor(
    @inject(MODULE.EVENTS.NODE.EMITTER)
    protected readonly events: EventEmitter2,
  ) {}

  async supscribeErrorEvents(job: IErrorEvent) {
    this.events.on(EVENT.ERROR.APP, job);
  }

  async publishErrorEvent(data: IErrorEventDTO) {
    this.events.emit(EVENT.ERROR.APP, data);
  }
}
