import { Container } from 'inversify';
import { SocketRegistry } from './socket.registry';
import { SocketIO, setup } from './socket';

export const SocketModule = new Container({ autoBindInjectable: true });

SocketModule.bind(SocketRegistry.FUNCTIONAL.IO).toConstantValue(setup);
SocketModule.bind(SocketRegistry.IO).to(SocketIO);
