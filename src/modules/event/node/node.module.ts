import { Container } from 'inversify';
import { NodeEventsRegistry } from './node.registry';
import { Events } from './event_emmiter';
import { EventEmitter2 } from 'eventemitter2';
import { NodeLikeEvents } from './like';
import { NodeAppEvents } from './app';
import { NodeNotificationEvents } from './notification';

export const NodeEventsModule = new Container({ autoBindInjectable: true });

NodeEventsModule.bind(NodeEventsRegistry.INSTANCE.EMITTER).to(Events);
NodeEventsModule.bind(NodeEventsRegistry.EMITTER).toConstantValue(
  new EventEmitter2(),
);

NodeEventsModule.bind(NodeEventsRegistry.NOTIFICATION)
  .to(NodeNotificationEvents)
  .inSingletonScope();

NodeEventsModule.bind(NodeEventsRegistry.LIKE)
  .to(NodeLikeEvents)
  .inSingletonScope();

NodeEventsModule.bind(NodeEventsRegistry.APP)
  .to(NodeAppEvents)
  .inSingletonScope();
