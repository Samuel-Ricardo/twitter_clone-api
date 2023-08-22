import { Container } from 'inversify';
import { SocketRegistry } from './socket.registry';
import { setup } from './socket';

export const SocketModule = new Container({ autoBindInjectable: true });

SocketModule.bind<typeof setup>(SocketRegistry.IO).toConstantValue(setup);
