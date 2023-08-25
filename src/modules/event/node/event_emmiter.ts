import { injectable } from 'inversify';
import { EventEmitter } from 'node:events';

@injectable()
class Event extends EventEmitter {
  constructor() {
    super();
  }
}
