import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderStatus } from 'src/types';
import { emulateAsyncProcess } from 'src/utils';
import { calculateUpToDateTaxAccordingToPrice } from '../../utils';

export class OtpFinalHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.validateIfTheCustomerIsAllowedForOTP(context);
    await calculateUpToDateTaxAccordingToPrice(context);
  }

  private async validateIfTheCustomerIsAllowedForOTP(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProcess(
      'validate if the customer is allowed for one-time payment',
      order,
    );
  }
}
