import { Container } from 'inversify';
import { MiddlewareRegistry } from './middleware.registry';
import { ERROR_MIDDLEWARE } from './error';
import { loggerMiddleware } from './logger/logger.module';
import { errorLoggerMiddleware } from './logger/error/logger.middleware';
import { UserModule } from '@User';
import { validateCreateUserData } from './validator';
import { validateUpdateUserDTO } from './validator/user/update-validator.middleware';
import { validateDeleteUserDTO } from './validator/user/delete-validator.middleware';
import { validateSelectUserByIdDTO } from './validator/user/select_by_id-validator.middleware';
import { ReactiveMiddlewareModule } from './reactive/reactive.module';
import { decryptCreateUserDTOMiddleware } from './security/cryptography/decrypt/user/create.middleware';
import { decryptMiddleware } from './security/cryptography/decrypt/decrypt.middleware';

const Module = new Container();

Module.bind(MiddlewareRegistry.ERROR).toConstantValue(ERROR_MIDDLEWARE);

Module.bind(MiddlewareRegistry.LOGGER.APP).toConstantValue(loggerMiddleware);
Module.bind(MiddlewareRegistry.LOGGER.ERROR).toConstantValue(
  errorLoggerMiddleware,
);

Module.bind(MiddlewareRegistry.VALIDATOR.USER.CREATE).toConstantValue(
  validateCreateUserData,
);

Module.bind(MiddlewareRegistry.VALIDATOR.USER.UPDATE).toConstantValue(
  validateUpdateUserDTO,
);

Module.bind(MiddlewareRegistry.VALIDATOR.USER.DELETE).toConstantValue(
  validateDeleteUserDTO,
);

Module.bind(MiddlewareRegistry.VALIDATOR.USER.SELECT.BY.ID).toConstantValue(
  validateSelectUserByIdDTO,
);

Module.bind(
  MiddlewareRegistry.SECURITY.CRYPTOGRAPHY.USER.DECRYPT.CREATE,
).toConstantValue(decryptCreateUserDTOMiddleware);

Module.bind(
  MiddlewareRegistry.SECURITY.CRYPTOGRAPHY.USER.DECRYPT.DATA,
).toConstantValue(decryptMiddleware);

export const MiddlewareModule = Container.merge(
  Module,
  UserModule,
  ReactiveMiddlewareModule,
);
