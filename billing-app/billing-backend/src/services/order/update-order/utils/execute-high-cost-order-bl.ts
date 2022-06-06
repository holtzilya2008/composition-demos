import { UpdateOrderDTO } from 'src/dto';
import { emulateAsyncProccess } from 'src/utils';

export async function executeHighCostOrderBL(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProccess('execute High cost order business logic', order);
}
