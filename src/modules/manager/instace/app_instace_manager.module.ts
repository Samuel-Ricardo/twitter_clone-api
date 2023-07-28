import expresss from 'express';

export class Application {
  private static instance?: expresss.Express;

  public static Instance() {
    if (!Application.instance) Application.instance = expresss();
    return Application.instance;
  }

  public static reloadInstance() {
    Application.instance = expresss();
    return Application.Instance();
  }

  public static newUniqueInstance() {
    return expresss();
  }
}
