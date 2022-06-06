import { BaseChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { OrderStatus } from "src/types";
import { emulateAsyncProccess } from "src/utils";
import { calculateUpToDateTaxAccordingToPrice } from "../../utils";

export class SplittedFinalHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Final;
  } 

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.checkIfProductPriceIsAllowedForSplit(context);
    await this.checkIfCustomerAllowdTheSpecifiedNumberOfPayments(context);
    await calculateUpToDateTaxAccordingToPrice(context);
  }

  private async checkIfProductPriceIsAllowedForSplit(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'Check if product price is allowed for split',
      order,
    );
  }

  private async checkIfCustomerAllowdTheSpecifiedNumberOfPayments(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'Check if customer allowd the specified number of payments',
      order,
    );
  }

}
