import { Container } from 'inversify';
import { routes } from './app.router';
import { RoutesRegistry } from './router.registry';

export const RoutesModule = new Container({ autoBindInjectable: true });

RoutesModule.bind(RoutesRegistry.ROUTES).toConstantValue(routes);
