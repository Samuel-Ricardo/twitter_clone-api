import { Router } from 'express';
import { RoutesModule } from './router.module';
import { RoutesRegistry } from './router.registry';
import { ReactiveRouterFactory as REACTIVE } from './reactive/reactive.factory';

export const RoutesFactory = {
  REACTIVE,
  EXPRESS: () => RoutesModule.get<Router>(RoutesRegistry.ROUTES),
};
