import { Events } from './event_emmiter';
import { NodeEventsModule } from './node.module';
import { NodeEventsRegistry } from './node.registry';

export const NodeEventsFactory = {
  EMITTER: () => NodeEventsModule.get<Events>(NodeEventsRegistry.EMITTER),
};
