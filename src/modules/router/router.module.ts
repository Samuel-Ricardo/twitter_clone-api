import { Container } from 'inversify';
import { routes } from './app.router';
import { RoutesRegistry } from './router.registry';
import { ReactiveSocketRouterModule as REACTIVE } from './reactive/socket/socket.module';

const Module = new Container({ autoBindInjectable: true });

export const RoutesModule = Container.merge(Module, REACTIVE);

RoutesModule.bind(RoutesRegistry.ROUTES).toConstantValue(routes);
