import { ISetNotificationVisualizedDTO } from '../set_visualized.dto';

export interface IVisualizedNotificationEventDTO {
  job: (notification: ISetNotificationVisualizedDTO) => any | Promise<any>;
}
