import { Container } from 'inversify';
import { NodeEventsRegistry } from './node.registry';
import { Events } from './event_emmiter';
import { EventEmitter } from 'node:events';
import { NodeLikeEvents } from './like';

export const NodeEventsModule = new Container({ autoBindInjectable: true });

NodeEventsModule.bind(NodeEventsRegistry.INSTANCE.EMITTER).to(Events);
NodeEventsModule.bind(NodeEventsRegistry.EMITTER).toConstantValue(
  new EventEmitter(),
);

NodeEventsModule.bind(NodeEventsRegistry.LIKE).to(NodeLikeEvents);
