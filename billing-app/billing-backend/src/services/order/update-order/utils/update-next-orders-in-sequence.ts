import { UpdateOrderDTO } from 'src/dto';
import { emulateAsyncProcess } from 'src/utils';

export async function updateNextOrdersInSequence(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProcess('should update next orders in sequence', order);
}
