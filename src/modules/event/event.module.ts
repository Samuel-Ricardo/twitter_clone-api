import { Container } from 'inversify';
import { NodeEventsModule as NODE_MODULE } from './node/node.module';

const MODULE = new Container({ autoBindInjectable: true });

export const EventsModule = Container.merge(MODULE, NODE_MODULE);
