import { Container } from 'inversify';
import { ReactiveSocketRouterModule as SOCKET } from './socket/socket.module';

export const Module = new Container({ autoBindInjectable: true });

export const ReactiveSocketRouterRegistry = Container.merge(Module, SOCKET);
