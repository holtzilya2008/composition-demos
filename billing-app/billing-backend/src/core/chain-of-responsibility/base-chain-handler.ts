import { ChainHandler } from './chain-handler';

export abstract class BaseChainHandler<T> implements ChainHandler<T> {
  protected next: ChainHandler<T>;

  protected abstract isResponsible(context: T): boolean;

  protected abstract handleConcrete(context: T): Promise<void>;

  setNext(handler: ChainHandler<T>): ChainHandler<T> {
    this.next = handler;
    return handler;
  }

  private async handleNext(context: T): Promise<void> {
    if (this.next) {
      await this.next.handle(context);
    }
  }

  async handle(context: T): Promise<void> {
    if (!this.isResponsible(context)) {
      await this.handleNext(context);
      return;
    }
    console.log(`Chain Handler ${this.constructor.name}`);
    await this.handleConcrete(context);
    await this.handleNext(context);
  }
}
