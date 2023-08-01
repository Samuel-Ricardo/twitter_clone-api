import { Router } from 'express';
import { RoutesModule } from './routes.module';
import { RoutesRegistry } from './routes.registry';

export const RoutesFactory = {
  ROUTES: () => RoutesModule.get<Router>(RoutesRegistry.ROUTES),
};
