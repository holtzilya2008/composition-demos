export interface ChainHandler<T> {
  setNext(handler: ChainHandler<T>): ChainHandler<T>;
  handle(context: T): Promise<void>;
}
