import { BaseChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { OrderType } from "src/types";
import { getSubscriptionUpdateChain } from "./subscription-chain";

export class SubscriptionUpdateHandler extends BaseChainHandler<UpdateOrderDTO> {

  private chain = getSubscriptionUpdateChain();

  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.type === OrderType.Subscription;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.chain.handle(context);
  }


}