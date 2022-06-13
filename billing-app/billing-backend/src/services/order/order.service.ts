import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { updateOrderChainFactory } from './update-order';

@Injectable()
export class OrderService {
  async update(order: UpdateOrderDTO): Promise<SuccessResponseDTO> {
    console.log(`${this.constructor.name}.update start`);
    const updateChain = updateOrderChainFactory();
    await updateChain.handle(order);
    return {
      success: true,
    };
  }
}
