import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderStatus } from 'src/types';
import { updateNextOrdersInSequence } from '../../utils';

export class SplittedApprovedHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Approved;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await updateNextOrdersInSequence(context);
  }
}
