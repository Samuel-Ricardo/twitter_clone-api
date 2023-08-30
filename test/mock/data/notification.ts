import { VALID_USER as USER } from './user';
import { VALID_POST as POST } from './post';
import { randomID } from '../../../src/modules/util/mongo';
import {
  INotificationDTO,
  ICreateNotificationDTO,
  ISetNotificationVisualizedDTO,
} from '../../../src/modules/@core/notification/DTO';
import { Notification } from '../../../src/modules/@core/notification/entity';

export const VALID_USER = USER;
export const VALID_POST = POST;

export const CREATE_POST_NOTIFICATION_DATA: ICreateNotificationDTO = {
  body: '[user] Post a tweet',
  userId: VALID_USER.id,
  eventId: VALID_POST.id,
  type: 'POST',
};

export const VALID_POST_NOTIFICATION_DATA: INotificationDTO = {
  ...CREATE_POST_NOTIFICATION_DATA,
  id: randomID(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_POST_NOTIFICATION = Notification.create(
  VALID_POST_NOTIFICATION_DATA,
);

export const SET_VISUALIZED_POST_NOTIFICATION_DATA: ISetNotificationVisualizedDTO =
  {
    id: VALID_POST_NOTIFICATION_DATA.id,
    visualizedAt: new Date(),
  };

export const SET_VISUALIZED_POST_NOTIFICATION = Notification.create({
  ...VALID_POST_NOTIFICATION_DATA,
  visualizedAt: SET_VISUALIZED_POST_NOTIFICATION_DATA.visualizedAt,
});
