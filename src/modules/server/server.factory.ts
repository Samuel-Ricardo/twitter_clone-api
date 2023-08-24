import { HTTPServer } from './http/http.server';
import { ServerModule } from './server.module';
import { ServerRegistry } from './server.registry';

export const ServerFactory = {
  HTTP: () => ServerModule.get<HTTPServer>(ServerRegistry.HTTP),
};
