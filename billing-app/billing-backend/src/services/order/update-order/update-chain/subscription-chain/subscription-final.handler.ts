import { BaseChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { OrderStatus } from "src/types";
import { emulateAsyncProccess } from "src/utils";

export class SubscriptionFinalHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.validateIfTheProductIsAllowedForSubscription(context);
    await this.executeSomeSpeialValidationForSubscription(context);
  }

  private async validateIfTheProductIsAllowedForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'validate if the product is allowed for subscription',
      order,
    );
  }

  private async executeSomeSpeialValidationForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'should preform special validation for subscription',
      order,
    );
  }



}
