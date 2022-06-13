import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderStatus } from 'src/types';
import { emulateAsyncProcess } from 'src/utils';
import { calculateUpToDateTaxAccordingToPrice } from '../../utils';

export class SplittedFinalHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.checkIfProductPriceIsAllowedForSplit(context);
    await this.checkIfCustomerAllowedTheSpecifiedNumberOfPayments(context);
    await calculateUpToDateTaxAccordingToPrice(context);
  }

  private async checkIfProductPriceIsAllowedForSplit(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProcess(
      'Check if product price is allowed for split',
      order,
    );
  }

  private async checkIfCustomerAllowedTheSpecifiedNumberOfPayments(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProcess(
      'Check if customer allowed the specified number of payments',
      order,
    );
  }
}
