import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { emulateAsyncProcess } from 'src/utils';

@Injectable()
export class OrderService {
  async update(order: UpdateOrderDTO): Promise<SuccessResponseDTO> {

    await emulateAsyncProcess('Update Order', order);

    return {
      success: true,
    };
  }
}
