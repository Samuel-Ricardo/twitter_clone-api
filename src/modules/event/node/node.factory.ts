import { NodeAppEvents } from './app';
import { Events } from './event_emmiter';
import { NodeLikeEvents } from './like';
import { NodeEventsModule } from './node.module';
import { NodeEventsRegistry } from './node.registry';
import { NodeNotificationEvents } from './notification';

export const NodeEventsFactory = {
  EMITTER: () => NodeEventsModule.get<Events>(NodeEventsRegistry.EMITTER),
  NOTIFICATION: () =>
    NodeEventsModule.get<NodeNotificationEvents>(
      NodeEventsRegistry.NOTIFICATION,
    ),
  LIKE: () => NodeEventsModule.get<NodeLikeEvents>(NodeEventsRegistry.LIKE),
  APP: () => NodeEventsModule.get<NodeAppEvents>(NodeEventsRegistry.APP),
};
