import { injectable } from 'inversify';
import { EventEmitter } from 'node:events';

@injectable()
export class Events extends EventEmitter {
  constructor() {
    super();
  }
}
