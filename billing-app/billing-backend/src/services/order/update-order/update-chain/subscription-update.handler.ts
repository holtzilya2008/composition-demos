import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderType } from 'src/types';
import { subscriptionUpdateChainFactory } from './subscription-chain';

export class SubscriptionUpdateHandler extends BaseChainHandler<UpdateOrderDTO> {
  private chain = subscriptionUpdateChainFactory();

  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.type === OrderType.Subscription;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.chain.handle(context);
  }
}
