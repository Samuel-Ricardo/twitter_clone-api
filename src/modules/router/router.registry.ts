import { ReactiveRouterRegistry as REACTIVE } from './reactive/reactive.registry';

export const RoutesRegistry = {
  REACTIVE,
  ROUTES: Symbol.for('app.router'),
};
