import EventEmitter2 from 'eventemitter2';
import { injectable } from 'inversify';
import { EventEmitter } from 'node:events';

@injectable()
export class Events extends EventEmitter2 {
  constructor() {
    super();
  }
}
