import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderStatus } from 'src/types';
import { emulateAsyncProcess } from 'src/utils';

export class SubscriptionFinalHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.validateIfTheProductIsAllowedForSubscription(context);
    await this.executeSomeSpecialValidationForSubscription(context);
  }

  private async validateIfTheProductIsAllowedForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProcess(
      'validate if the product is allowed for subscription',
      order,
    );
  }

  private async executeSomeSpecialValidationForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProcess(
      'should preform special validation for subscription',
      order,
    );
  }
}
