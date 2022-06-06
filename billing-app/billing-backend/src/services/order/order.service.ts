import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { getUpdateOrderChain } from './update-order';

@Injectable()
export class OrderService {
  async update(order: UpdateOrderDTO): Promise<SuccessResponseDTO> {
    console.log(`${this.constructor.name}.update start`);
    const updateChain = getUpdateOrderChain();
    await updateChain.handle(order);
    return {
      success: true,
    };
  }
}
