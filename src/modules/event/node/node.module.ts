import { Container } from 'inversify';
import { NodeEventRegistry } from './node.registry';
import { Events } from './event_emmiter';

export const NodeEventModule = new Container({ autoBindInjectable: true });

NodeEventModule.bind(NodeEventRegistry.EMITTER).to(Events);
