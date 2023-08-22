import { Container } from 'inversify';
import { SocketModule } from './socket_io/socket.module';

const Module = new Container({ autoBindInjectable: true });

export const ReactiveModule = Container.merge(Module, SocketModule);
