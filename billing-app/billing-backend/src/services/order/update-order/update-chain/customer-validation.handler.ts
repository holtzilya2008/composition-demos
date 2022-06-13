import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderStatus } from 'src/types';
import { emulateAsyncProcess } from 'src/utils';

export class CustomerValidationHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.validateCustomer(context);
  }

  private async validateCustomer(order: UpdateOrderDTO): Promise<void> {
    await emulateAsyncProcess('Validate customer', order);
  }
}
