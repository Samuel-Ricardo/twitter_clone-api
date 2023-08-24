import { Container } from 'inversify';
import { SocketRegistry } from './socket.registry';
import { SocketIO, setup } from './socket';
import { ServerModule } from '../../server/server.module';

const Module = new Container({ autoBindInjectable: true });

export const SocketModule = Container.merge(Module, ServerModule);

SocketModule.bind(SocketRegistry.FUNCTIONAL.IO).toConstantValue(setup);
SocketModule.bind(SocketRegistry.IO).to(SocketIO);
