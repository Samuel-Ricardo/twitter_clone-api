import { Container } from 'inversify';
import { RepositoryModule as REPOSITORY } from '../../repository/repository.module';
import { NotificationRegistry } from './notification.registry';
import { CreateNotificationUseCase } from './use-case/create.use-case';
import { DeleteNotificationUseCase } from './use-case/delete.use-case';
import { VisualizeNotificationUseCase } from './use-case/set_visualized.use-case';
import { GetUserNotificationsUseCase } from './use-case/get_by_user.use-case';
import { NotificationService } from './service';

const MODULE = new Container({ autoBindInjectable: true });

export const NotificationModule = Container.merge(MODULE, REPOSITORY);

NotificationModule.bind(NotificationRegistry.USE_CASE.CREATE).to(
  CreateNotificationUseCase,
);

NotificationModule.bind(NotificationRegistry.USE_CASE.DELETE).to(
  DeleteNotificationUseCase,
);

NotificationModule.bind(NotificationRegistry.USE_CASE.VISUALIZE).to(
  VisualizeNotificationUseCase,
);

NotificationModule.bind(NotificationRegistry.USE_CASE.GET.BY.USER).to(
  GetUserNotificationsUseCase,
);

NotificationModule.bind(NotificationRegistry.SERVICE).to(NotificationService);
