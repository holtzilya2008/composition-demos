import { UpdateOrderDTO } from 'src/dto';
import { emulateAsyncProcess } from 'src/utils';

export async function executeHighCostOrderBL(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProcess('execute High cost order business logic', order);
}
