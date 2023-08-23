import { Container } from 'inversify';
import { HTTPServer } from './http/http.server';
import { ServerRegistry } from './server.registry';

export const ServerModule = new Container({ autoBindInjectable: true });

ServerModule.bind<HTTPServer>(ServerRegistry._HTTP).to(HTTPServer);
ServerModule.bind<HTTPServer>(ServerRegistry.HTTP).toConstantValue(
  ServerModule.get<HTTPServer>(ServerRegistry._HTTP),
);
