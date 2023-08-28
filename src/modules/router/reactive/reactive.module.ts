import { Container } from 'inversify';
import { ReactiveSocketRouterModule as SOCKET } from './socket/socket.module';

const Module = new Container({ autoBindInjectable: true });

export const ReactiveRouterRegistry = Container.merge(Module, SOCKET);
