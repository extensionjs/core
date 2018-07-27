export interface Context {
  getServerInstance<T>(): T | undefined;
}
