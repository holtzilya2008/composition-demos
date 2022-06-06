import { UpdateOrderDTO } from "src/dto";
import { emulateAsyncProccess } from "src/utils";

export async function calculateUpToDateTaxAccordingToPrice(
  order: UpdateOrderDTO,
): Promise<void> {
  await emulateAsyncProccess(
    'calculate up to date tax according to price',
    order,
  );
}
