import { UpdateOrderDTO } from "src/dto";
import { emulateAsyncProccess } from "src/utils";

export async function updateNextOrdersInSequence(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProccess('should update next orders in sequence', order);
}