export interface IRepository<T> {
  create(data): Promise<T>;
  selectAll(data): Promise<T[]>;
}
