import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderType } from 'src/types';
import { getSplittedUpdateChain } from './splitted-chain';

export class SplittedUpdateHandler extends BaseChainHandler<UpdateOrderDTO> {
  private chain = getSplittedUpdateChain();

  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.type === OrderType.Splitted;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.chain.handle(context);
  }
}
