import { Container } from 'inversify';
import { NodeEventsRegistry } from './node.registry';
import { Events } from './event_emmiter';

export const NodeEventsModule = new Container({ autoBindInjectable: true });

NodeEventsModule.bind(NodeEventsRegistry.EMITTER).to(Events);
