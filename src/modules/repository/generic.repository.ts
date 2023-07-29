export interface IRepository<T> {
  create(data: any): Promise<T>;
  selectAll(data: any): Promise<T[]>;
}
