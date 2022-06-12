import { UpdateOrderDTO } from "src/dto";
import { emulateAsyncProcess } from "src/utils";

export async function calculateUpToDateTaxAccordingToPrice(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProcess(
    'calculate up to date tax according to price',
    order,
  );
}
