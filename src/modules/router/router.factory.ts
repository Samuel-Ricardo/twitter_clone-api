import { Router } from 'express';
import { RoutesModule } from './router.module';
import { RoutesRegistry } from './router.registry';

export const RoutesFactory = {
  ROUTER: () => RoutesModule.get<Router>(RoutesRegistry.ROUTES),
};
