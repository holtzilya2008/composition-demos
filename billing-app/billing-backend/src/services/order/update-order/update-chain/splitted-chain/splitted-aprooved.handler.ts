import { BaseChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { OrderStatus } from "src/types";
import { updateNextOrdersInSequence } from "../../utils";

export class SplittedAproovedHandler extends BaseChainHandler<UpdateOrderDTO> {
  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.status >= OrderStatus.Aprooved;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await updateNextOrdersInSequence(context);
  }

}
