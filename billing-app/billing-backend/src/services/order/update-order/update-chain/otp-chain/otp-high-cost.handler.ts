import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { HIGH_COST_BARRIER_USD } from 'src/services/order/constants';
import { OrderStatus } from 'src/types';
import { executeHighCostOrderBL } from '../../utils';

export class OtpHighCostHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return (
      (context.status === OrderStatus.Aprooved ||
        context.status === OrderStatus.Paid) &&
      context.totalCost >= HIGH_COST_BARRIER_USD
    );
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await executeHighCostOrderBL(context);
  }
}
