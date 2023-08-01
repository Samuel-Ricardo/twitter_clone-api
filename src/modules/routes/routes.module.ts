import { Container } from 'inversify';
import { routes } from './app.route';
import { RoutesRegistry } from './routes.registry';

export const RoutesModule = new Container({ autoBindInjectable: true });

RoutesModule.bind(RoutesRegistry.ROUTES).toConstantValue(routes);
